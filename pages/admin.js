import React, { useEffect, useState } from 'react'
import axios from 'axios';
import serverConfig from '../serverConfig';
import { Container, Nav, Navbar } from 'react-bootstrap';
import Link from 'next/link';
import sha from 'sha256';

const admin = () => {

    // Authentication States
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [loggedIn, setLoggedIn] = useState(false)

    // Active route determinant
    const [activeTab, setactiveTab] = useState("EditPlans")

    const [Blogs, setBlogs] = useState([])
    // Message component State
    const [Messages, setMessages] = useState([])
    const [MessagePaginationIndex, setMessagePaginationIndex] = useState(0)
    const [NumOfMessagePerView, setNumOfMessagePerView] = useState(5)
    const [Plans, setPlans] = useState([])
    const [Packages, setPackages] = useState([])
    const [NumOfPackagesPerView, setNumOfPackagesPerView] = useState(5)
    const [PackagePaginationIndex, setPackagePaginationIndex] = useState(0)
    const [EmailContent, setEmailContent] = useState("")
    const SendResponseMessage = () => {
        alert("Email will be sent...")
        let a = JSON.parse(JSON.stringify(Messages));
        a.forEach(element => {
            if (element.send === true) {
                element.send = false;
                // Send Email here on element.message
            }
        });
        setMessages(a);
    }
    // Plans State
    const DeletePlan = (planName) => {
        if (confirm("Are you sure you want to remove " + planName)) {
            // remove the plan name along with the package information from api
            axios.post(`${serverConfig}/plans/${planName}`, {})
                .then(r => {
                    console.log(r.data);
                    console.log("Removed")
                })
                .catch(e => {
                    alert('Coundn\'t delete plan, Is server online?')
                });
        } else {
            console.log("Nooo")
        }
    }
    // Send Email State
    const [Recipient, setRecipient] = useState("")
    const [Subject, setSubject] = useState("")
    const [EmailBody, setEmailBody] = useState("")
    const SendOneEmail = () => {
        // Send email by sending information from top to backend
        axios.post(`${serverConfig}/email/send`, {
            recepient: Recipient,
            subject: Subject,
            emailBody: EmailBody
        })
            .then(r => {
                console.log(r.data);
            })
            .catch(e => {
                alert('Coundn\'t Send Email, Is server online?')
            });
    }
    // Blogs
    // image: "/images/blog-image/blog-image1.jpg",
    //     by: "Sarah Taylor",
    //     date: "June 29, 2019",
    //     title: "How To Boost Your Digital Marketing Company",
    //     description: "Lorem ipsum dolor sit amet, constetur adipiscing elit, sed do eiusmod tempor incididunt.",
    //     readmoreLink: ''
    const [image_Name, setImage_Name] = useState(null)
    // EditPlan
    const [SelectedPlanToEdit, setSelectedPlanToEdit] = useState("")
    const [PackageToAdd, setPackageToAdd] = useState("")
    const [Present, setPresent] = useState(true)
    const [NewPlan, setNewPlan] = useState("")
    const [NewPlanSubtitle, setNewPlanSubtitle] = useState("")
    const [Price, setPrice] = useState("")
    const DeletePackageFromPlan = (pkg, plan) => {
        if (confirm("Are you sure you want to remove " + pkg + " from " + plan)) {
            // remove package from plan
            axios.post(`${serverConfig}/plans/delpkg`, {
                name: pkg,
                planName: plan,
            })
                .then(r => {

                    LoadData()
                    setPackageToAdd("")
                })
                .catch(e => {
                    alert('Coundn\'t Add, Is server online?')
                });

        } else {
            alert("Couldn't remove the package server offline")
        }
    }
    const AddPackageToPlan = (pkg, plan, present) => {
        if (confirm("Are you sure you want to Add " + pkg + " to " + plan)) {
            // remove package from plan
            axios.post(`${serverConfig}/plans/addpkg`, {
                name: pkg,
                present: present,
                planName: plan,
            })
                .then(r => {
                    LoadData()
                    setPackageToAdd("")
                })
                .catch(e => {
                    alert('Coundn\'t Add, Is server online?')
                });

        } else {
            alert("Couldn't Add the package server offline")
        }
    }
    const addNewPlan = () => {
        if (confirm("Are you sure you want to Add " + NewPlan + " to your business")) {
            // remove package from plan
            axios.post(`${serverConfig}/plans/addplan`, {
                title: NewPlan,
                subtitle: NewPlanSubtitle,
                price: Price,
            })
                .then(r => {
                    setNewPlan("");
                    setNewPlanSubtitle("")
                    setPrice("")
                    LoadData()
                })
                .catch(e => {
                    alert('Coundn\'t Add, Is server online?')
                });

        } else {
            alert("Couldn't Add the plan server offline")
        }
    }
    const LoadData = () => {
        axios.get(`${serverConfig}/plans/plans`)
            .then(r => {
                console.log(r.data);
                setPlans(r.data)
            })
            .catch(e => {
                alert('Error fetching data, Is server online?')
            });
        axios.get(`${serverConfig}/plans/packages`)
            .then(r => {
                console.log(r.data);
                setPackages(r.data)
            })
            .catch(e => {
                alert('Error fetching data, Is server online?')
            });
        axios.get(`${serverConfig}/messages/getMessages`)
            .then(r => {
                console.log(r.data);
                let a = [];
                r.data.map(m => {
                    a.push({
                        message: m,
                        send: false
                    })
                })
                setMessages(a)
            })
            .catch(e => {
                alert('Error fetching data, Is server online?')
            });
        axios.get(`${serverConfig}/blogs/getBlogs`)
            .then(r => {
                console.log(r.data);
                setBlogs(r.data)
                console.log(Blogs);
                console.log("----");
            })
            .catch(e => {
                alert('Error fetching data, Is server online?')
            });
    }
    useEffect(() => {
        LoadData()
    }, [])
    const hndlgn = () => {
        axios.get(`${serverConfig}/users/adminCred`)
            .then(res => {
                if (username === res.data.u && sha(password).toString() === res.data.p) {
                    setLoggedIn(true)
                } else {
                    alert("Invalid Username or Password")
                }
                setUsername("")
                setPassword("")
            })
            .catch(err => {
                alert("Server Offline")
            });
    }
    const hndlgt = () => {
        setLoggedIn(false)
    }
    const closeDrawer = () => {
        document.getElementById('sideNav').style.width = '0%'
        document.getElementById('sideNav').style.padding = '0pt'
        document.getElementById('NavBarOutlet').style.width = '100%'
    }
    const openDrawer = () => {
        document.getElementById('sideNav').style.width = '15%'
        document.getElementById('sideNav').style.padding = '15pt'
        document.getElementById('NavBarOutlet').style.width = '85%'
    }
    const [DrawerToggleText, setDrawerToggleText] = useState("close")
    const toggleDrawer = () => {
        if (document.getElementById('sideNav').style.width !== '15%') {
            openDrawer()
            setDrawerToggleText("close")
        } else {
            closeDrawer()
            setDrawerToggleText("open")
        }
    }
    const hndlPssCng = () => {
        if (username !== "" && password !== "") {
            axios.post(`${serverConfig}/users/chngAdminCred`, {
                u: username,
                p: password
            })
                .then(res => {
                    if (confirm("Are you sure?")) {
                        setLoggedIn(false)
                    }
                })
                .catch(err => {
                    alert("Error setting new Password")
                })
        }
    }
    return (
        <div style={{ height: '100vh', overflow: 'hidden' }}>
            {loggedIn &&
                <>
                    <div style={{ display: 'flex', flexDirection: 'row', minHeight: '100vh', }}>
                        <div id='sideNav' style={{
                            width: '15%', height: '100vh', padding: '15pt',
                            backgroundColor: '#222D3B', transition: '0.4s', display: 'flex',
                            flexDirection: 'column', overflowX: 'hidden', whiteSpace: 'nowrap',
                        }}>
                            <div>
                                <Link href="/">
                                    <a className="navbar-brand">
                                        <img src="/images/logo.png" style={{ width: '100%' }} className="black-logo" alt="logo" />
                                    </a>
                                </Link>
                            </div>
                            <button
                                onClick={() => setactiveTab("EditPlans")}
                                style={activeTab === "EditPlans" ? { marginTop: '15pt', marginBottom: '15pt', transition: '0.2s', transform: 'scale(1.05)' } : { marginTop: '2pt', marginBottom: '2pt', transition: '0.5s' }}
                                className={activeTab === "EditPlans" ? 'btn btn-secondary' : 'btn btn-outline-light'}>
                                Plan Manager</button>
                            <button
                                onClick={() => setactiveTab("Plans")}
                                style={activeTab === "Plans" ? { marginTop: '15pt', marginBottom: '15pt', transition: '0.2s', transform: 'scale(1.05)' } : { marginTop: '2pt', marginBottom: '2pt', transition: '0.5s' }}
                                className={activeTab === "Plans" ? 'btn btn-secondary' : 'btn btn-outline-light'}>
                                Current Plan</button>
                            <button
                                onClick={() => setactiveTab("Messages")}
                                style={activeTab === "Messages" ? { marginTop: '15pt', marginBottom: '15pt', transition: '0.2s', transform: 'scale(1.05)' } : { marginTop: '2pt', marginBottom: '2pt', transition: '0.5s' }}
                                className={activeTab === "Messages" ? 'btn btn-secondary' : 'btn btn-outline-light'}>
                                Messages</button>
                            <button
                                onClick={() => setactiveTab("Blogs")}
                                style={activeTab === "Blogs" ? { marginTop: '15pt', marginBottom: '15pt', transition: '0.2s', transform: 'scale(1.05)' } : { marginTop: '2pt', marginBottom: '2pt', transition: '0.5s' }}
                                className={activeTab === "Blogs" ? 'btn btn-secondary' : 'btn btn-outline-light'}>
                                Blogs</button>
                            <button
                                onClick={() => setactiveTab("Password")}
                                style={activeTab === "Password" ? { marginTop: '15pt', marginBottom: '15pt', transition: '0.2s', transform: 'scale(1.05)' } : { marginTop: '2pt', marginBottom: '2pt', transition: '0.5s' }}
                                className={activeTab === "Password" ? 'btn btn-secondary' : 'btn btn-outline-light'}>
                                Password</button>
                            <button
                                onClick={hndlgt}
                                style={{ marginTop: '40pt' }}
                                className={'btn btn-outline-danger'}>
                                Log Out</button>
                        </div>
                        <div id='NavBarOutlet' style={{ transition: '0.4s', width: '85%' }}>
                            <div>
                                <Navbar collapseOnSelect expand="lg" bg="light" variant="light"
                                    style={{ boxShadow: '10px 0px 20px rgb(200,200,200)' }}>
                                    <div onClick={() => toggleDrawer()}
                                        style={{
                                            cursor: 'pointer', width: 'fit-content', padding: '5pt',
                                            color: '#222D3B',
                                        }}>
                                        Menu
                                    </div>
                                    <Container>
                                        <Navbar.Brand href="#home">InfoNet Media</Navbar.Brand>
                                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                                        <Navbar.Collapse id="responsive-navbar-nav">
                                            <Nav className="me-auto">

                                            </Nav>
                                            <Nav>
                                                <div>Welcome Admin</div>
                                            </Nav>
                                        </Navbar.Collapse>
                                    </Container>
                                </Navbar>
                                <div className='container' style={{ height: '90vh', display: 'flex', alignItems: 'center' }}>
                                    <div style={{
                                        marginTop: '5vh', boxShadow: '0px 0px 20px rgb(220,220,220)', width: "100%",
                                        paddingBottom: '10vh', height: '70vh', overflow: 'scroll'
                                    }}>
                                        <div style={{
                                            paddingTop: '1vh', paddingBottom: '1px', textAlign: 'center', fontSize: 'xx-large',
                                            color: 'white', backgroundColor: '#222D3B', marginBottom: '5vh',
                                        }}>{activeTab}</div>
                                        <div className='container' style={{ width: '100%' }}>
                                            {
                                                activeTab === "Password" &&
                                                <div>
                                                    <div className='container'>
                                                        <div className='row'>
                                                            <div className='col-md-3'></div>
                                                            <div className='col-md-6'>
                                                                <h3>Change Password</h3>
                                                                <hr />
                                                                <input value={username} onChange={(e) => setUsername(e.target.value)}
                                                                    className='col-md-12 form-control' style={{ marginTop: '4pt', marginBottom: '4pt' }} placeholder='Username' />
                                                                <input value={password} onChange={(e) => setPassword(e.target.value)}
                                                                    className='col-md-12 form-control' style={{ marginTop: '4pt', marginBottom: '4pt' }} type="password" placeholder='Password' />

                                                                <button onClick={hndlPssCng} className='btn btn-outline-primary' >
                                                                    Update
                                                                </button>

                                                            </div>
                                                            <div className='col-md-3'></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            }
                                            {
                                                activeTab === "Plans" &&
                                                <div style={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                                    <table className='table table-striped' style={{ width: '100%', }}>
                                                        <thead style={{}}>
                                                            <tr style={{ textAlign: 'center' }}>
                                                                <th>
                                                                    Plan
                                                                </th>
                                                                <th>Details</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {
                                                                Plans.map(p => {
                                                                    return (
                                                                        <tr>
                                                                            <td>
                                                                                {p.title}
                                                                                <div style={{ color: 'gray' }}><i>{p.subtitle}</i></div>
                                                                                <div style={{ color: 'gray' }}><i>{p.price}</i></div>
                                                                            </td>
                                                                            <td>
                                                                                <ul>
                                                                                    {
                                                                                        Packages.filter(fpkg => fpkg.planName === p.title).map(pkg => {
                                                                                            return (
                                                                                                <li>{pkg.name}{" "}{pkg.present === true ? "✔️" : "❌"}</li>
                                                                                            );
                                                                                        })
                                                                                    }
                                                                                </ul>
                                                                            </td>
                                                                        </tr>
                                                                    );
                                                                })
                                                            }
                                                        </tbody>
                                                    </table>
                                                    <br />
                                                </div>
                                            }
                                            {
                                                activeTab === "EditPlans" &&
                                                <div className='container'>
                                                    <div className='row'>
                                                        <div className='col-md-12'>
                                                            <div className='row container'>
                                                                <div className='col-md-3'>
                                                                    <input
                                                                        style={{ marginTop: '2pt', marginBottom: '5pt' }}
                                                                        className=' form-control'
                                                                        placeholder="Add a new plan"
                                                                        value={NewPlan} onChange={(e) => setNewPlan(e.target.value)}
                                                                    />
                                                                </div>
                                                                <div className='col-md-3'>
                                                                    <input
                                                                        style={{ marginTop: '2pt', marginBottom: '5pt' }}
                                                                        className=' form-control'
                                                                        placeholder="Subtitle"
                                                                        value={NewPlanSubtitle} onChange={(e) => setNewPlanSubtitle(e.target.value)}
                                                                    />
                                                                </div>
                                                                <div className='col-md-3'>
                                                                    <input
                                                                        style={{ marginTop: '2pt', marginBottom: '5pt' }}
                                                                        className='form-control'
                                                                        placeholder="Price"
                                                                        value={Price} onChange={(e) => setPrice(e.target.value)}
                                                                    />
                                                                </div>
                                                                <button
                                                                    style={{ marginTop: '2pt', marginBottom: '5pt' }}
                                                                    disabled={!(NewPlan !== "" && NewPlanSubtitle !== "" && Price !== "")}
                                                                    className='btn btn-success col-md-3'
                                                                    onClick={addNewPlan}>Add</button>
                                                            </div>
                                                            <br />
                                                            <div className='row container'>
                                                                <div className='col-md-3' style={{}}>

                                                                    {
                                                                        Plans.map(p => {
                                                                            return (
                                                                                <div
                                                                                    style={{
                                                                                        padding: '6pt', margin: '10pt', border: `1px solid ${p.title === SelectedPlanToEdit ? 'orange' : 'rgb(220,220,220)'}`,
                                                                                        textAlign: 'center', justifyContent: 'space-between', display: 'flex',
                                                                                        alignItems: 'center'
                                                                                    }}
                                                                                    key={p.title}>
                                                                                    <div
                                                                                        style={{ cursor: 'pointer', }}
                                                                                        onClick={() => {
                                                                                            setPackagePaginationIndex(0)
                                                                                            setSelectedPlanToEdit(p.title)
                                                                                        }}>
                                                                                        {p.title}
                                                                                    </div>
                                                                                    <button className='btn btn-danger'
                                                                                        onClick={() => {
                                                                                            axios.post(`${serverConfig}/plans/deleteplan`, {
                                                                                                title: p.title,
                                                                                            })
                                                                                                .then(r => {
                                                                                                    LoadData()
                                                                                                })
                                                                                                .catch(e => {
                                                                                                    alert('Coundn\'t Add, Is server online?')
                                                                                                });
                                                                                        }}
                                                                                    >Delete</button>
                                                                                </div>
                                                                            );
                                                                        })
                                                                    }
                                                                </div>
                                                                <div className='col-md-9' style={{ textAlign: 'center' }}>
                                                                    <div style={{ color: 'gray', marginTop: '3vh' }}><i style={{ color: 'black' }}>{SelectedPlanToEdit}</i></div>
                                                                    <br />
                                                                    <div>
                                                                        {SelectedPlanToEdit !== "" &&
                                                                            <div
                                                                                style={{
                                                                                    display: 'flex', justifyContent: 'space-between',
                                                                                    alignItems: 'center',
                                                                                    margin: '5pt'
                                                                                }}>
                                                                                <div className='input-group'>
                                                                                    <input placeholder={`Add Package for ${SelectedPlanToEdit}`}
                                                                                        value={PackageToAdd}
                                                                                        onChange={(e) => setPackageToAdd(e.target.value)}
                                                                                        className='form-control' />
                                                                                    <button className={`btn ${Present ? 'btn-outline-success' : 'btn-outline-danger'}`}
                                                                                        onClick={() => setPresent(!Present)}
                                                                                    >{Present ? 'present' : 'unavailable'}</button>
                                                                                    <button className='btn btn-outline-primary'
                                                                                        onClick={() => AddPackageToPlan(PackageToAdd, SelectedPlanToEdit, Present)}
                                                                                    >Add {PackageToAdd} Package</button>
                                                                                </div>
                                                                            </div>
                                                                        }
                                                                        <br />
                                                                        <div className='btn btn-group'>
                                                                            <button disabled={PackagePaginationIndex === 0} className='btn btn-secondary' onClick={() => setPackagePaginationIndex(PackagePaginationIndex - NumOfPackagesPerView)}>
                                                                                Previous
                                                                            </button>
                                                                            <button disabled={PackagePaginationIndex + NumOfPackagesPerView >= Packages.filter(pkg => pkg.planName === SelectedPlanToEdit).length} className='btn btn-secondary' onClick={() => setPackagePaginationIndex(PackagePaginationIndex + NumOfPackagesPerView)}>
                                                                                Next
                                                                            </button>
                                                                        </div>
                                                                        {
                                                                            Packages.filter(pkg => pkg.planName === SelectedPlanToEdit).slice(PackagePaginationIndex, NumOfPackagesPerView + PackagePaginationIndex).map(pkg => {
                                                                                return (
                                                                                    <div key={pkg.name}
                                                                                        style={{
                                                                                            display: 'flex', justifyContent: 'space-between',
                                                                                            alignItems: 'center',
                                                                                            border: '1px solid rgb(220,220,220)', padding: '10pt',
                                                                                            margin: '10pt'
                                                                                        }}>
                                                                                        <div>{pkg.name}</div>
                                                                                        <button className='btn btn-danger'
                                                                                            onClick={() => DeletePackageFromPlan(pkg.name, SelectedPlanToEdit)}
                                                                                        >Delete</button>
                                                                                    </div>
                                                                                );
                                                                            })
                                                                        }

                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            }
                                            {
                                                activeTab === "Messages" &&
                                                <div>
                                                    <h2>Messages</h2>
                                                    <br />
                                                    <div>
                                                        Total ({Messages.length})
                                                    </div>
                                                    <br />
                                                    <table style={{ textAlign: 'center' }} className='table table-striped '>
                                                        <thead>
                                                            <tr>
                                                                <th>
                                                                    Name
                                                                </th>
                                                                <th>
                                                                    Email
                                                                </th>
                                                                <th>
                                                                    Phone
                                                                </th>
                                                                <th>
                                                                    Subject
                                                                </th>
                                                                <th>
                                                                    Message
                                                                </th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {
                                                                Messages.slice(MessagePaginationIndex, NumOfMessagePerView + MessagePaginationIndex).map(m => {
                                                                    return (
                                                                        <>
                                                                            <tr key={m.message.text}>
                                                                                <td>
                                                                                    {m.message.name}
                                                                                </td>
                                                                                <td>
                                                                                    {m.message.email}
                                                                                </td>
                                                                                <td>
                                                                                    {m.message.phone}
                                                                                </td>
                                                                                <td>
                                                                                    {m.message.subject}
                                                                                </td>
                                                                                <td style={{ color: 'gray', fontStyle: 'italic' }}>
                                                                                    {m.message.text}
                                                                                </td>
                                                                            </tr>
                                                                        </>
                                                                    )
                                                                })
                                                            }
                                                        </tbody>
                                                    </table>
                                                    <div className='btn-group'>
                                                        <button className='btn btn-outline-info' disabled={MessagePaginationIndex === 0} onClick={() => setMessagePaginationIndex(MessagePaginationIndex - NumOfMessagePerView)}>
                                                            Previous
                                                        </button>
                                                        <button className='btn btn-outline-info' disabled={NumOfMessagePerView + MessagePaginationIndex >= Messages.length} onClick={() => setMessagePaginationIndex(MessagePaginationIndex + NumOfMessagePerView)}>
                                                            Next
                                                        </button>
                                                    </div>
                                                </div>
                                            }
                                            {
                                                activeTab === "SendMail" &&
                                                <div>
                                                    <div className='container'>
                                                        <div className='row'>
                                                            <div className='col-md-3'></div>
                                                            <div className='col-md-6'>
                                                                <h3>Email Server</h3>
                                                                <hr />
                                                                <input value={Subject}
                                                                    onChange={(e) => {
                                                                        setSubject(e.target.value)
                                                                    }}
                                                                    placeholder='Subject' className='form-control' />
                                                                <input value={Recipient}
                                                                    onChange={(e) => {
                                                                        setRecipient(e.target.value)
                                                                    }} placeholder='Recipeint' className='form-control' />
                                                                <textarea value={EmailBody}
                                                                    onChange={(e) => {
                                                                        setEmailBody(e.target.value)
                                                                    }}
                                                                    placeholder='Email' className='form-control'></textarea>
                                                                <br />
                                                                <button className='btn btn-outline-success'
                                                                    onClick={SendOneEmail}
                                                                >Send</button>
                                                            </div>
                                                            <div className='col-md-3'></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            }
                                            {
                                                activeTab === "Blogs" &&
                                                <div>
                                                    <div className='container'>
                                                        <div className='row'>
                                                            <div className='col-md-3'></div>
                                                            <div className='col-md-6'>
                                                                <h3>Add Blogs</h3>
                                                                <hr />
                                                                <form action={`${serverConfig}/addBlog`} method="post" enctype="multipart/form-data">
                                                                    <input
                                                                        onChange={(e) => setImage_Name(e.target.files[0].name)}
                                                                        className='col-md-12 form-control' type="file" name="avatar" />

                                                                    <input className='col-md-12 form-control' value={image_Name} name="imageName" hidden />
                                                                    <input name='by_blog'
                                                                        className='col-md-12 form-control' style={{ marginTop: '4pt', marginBottom: '4pt' }} placeholder='BY' />

                                                                    <input name='date_blog'
                                                                        className='col-md-12 form-control' style={{ marginTop: '4pt', marginBottom: '4pt' }} type={'date'} />

                                                                    <input name='title_blog'
                                                                        className='col-md-12 form-control' style={{ marginTop: '4pt', marginBottom: '4pt' }} placeholder='Blog Title' />

                                                                    <input name='description_blog'
                                                                        className='col-md-12 form-control' style={{ marginTop: '4pt', marginBottom: '4pt' }} placeholder='Description' />

                                                                    <input name='readmoreLink_blog'
                                                                        className='col-md-12 form-control' style={{ marginTop: '4pt', marginBottom: '4pt' }} placeholder='Redirect Link' />

                                                                    <input type="submit" value="Upload" className='btn btn-outline-primary' />
                                                                </form>
                                                            </div>
                                                            <div className='col-md-3'></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            }
            {
                !loggedIn &&
                <div style={{
                    height: '100vh', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontWeight: 'bold'
                }}>
                    <div className='container'>
                        <div style={{ fontSize: 'xx-large', marginBottom: '20pt' }} >
                            Log In First
                        </div>
                        <div className='row'>
                            <div className='col-4'>
                                <div className='row'>
                                    <div className='col-md-12'>
                                        <input className='form-control'
                                            placeholder='Username'
                                            type={'text'}
                                            style={{ marginBottom: "10pt" }} value={username} onChange={e => setUsername(e.target.value)} />
                                    </div>
                                    <div className='col-md-12'>
                                        <input className='form-control'
                                            placeholder='Passphrase'
                                            type={'password'}
                                            style={{ marginBottom: "10pt" }} value={password} onChange={e => setPassword(e.target.value)} />
                                    </div>
                                    <div className='col-md-12' >
                                        <Link href={'/'} >
                                            <button className='btn btn-dark'>
                                                Cancel
                                            </button>
                                        </Link>{" | "}
                                        <button className='btn btn-primary' onClick={hndlgn}>
                                            Log In
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            }
            <div style={{ height: "10vh" }}></div>
        </div>
    )

}

export default admin



