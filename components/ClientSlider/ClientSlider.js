import React, { useState } from 'react';
import styles from './ClientSlider.module.css';

function ClientSlider() {
    const [Clients, setClients] = useState([
        {
            name: 'Havant South Downs College',
            link: 'https://www.hsdc.ac.uk/',
            logo: 'https://yt3.ggpht.com/ytc/AKedOLQeL58K6nki3NMqQihZFwgmDNITaEEPD1-OrS5g=s900-c-k-c0x00ffffff-no-rj'
        },
        {
            name: 'Highbury College',
            link: 'https://www.highbury.ac.uk/',
            logo: 'https://www.highbury.ac.uk/-/media/HighburyCollege/Design/Images/Site-Logos/logo456CoPC.png?h=120&w=228&la=en-GB&hash=86D35A1B3D65F5A092307C5CA50968B3985CF6A6&useCustomFunctions=1&centerCrop=1'
        },
        {
            name: 'Chichester College',
            link: 'https://www.chichester.ac.uk/',
            logo: 'https://www.chichester.ac.uk/sf_images/logo-chichester.jpg'
        },
        {
            name: 'City of Portsmouth College',
            link: 'https://city-of-portsmouth-college.ac.uk/',
            logo: 'https://city-of-portsmouth-college.ac.uk/images/city-of-portsmouth-college-logo.png'
        },
    ])
    return (
        <div style={{
            paddingTop: '5vh', paddingBottom: '5vh', width: '100%',

        }}>
            <div
                style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', whiteSpace: 'nowrap' }}
                className={styles.slidedClient}
            >
                {
                    Clients.map(client => (
                        <a
                            href={client.link}
                            key={client.name}
                            style={{
                                paddingLeft: '40pt',
                                paddingRight: '40pt',
                                paddingTop: '10pt',
                                paddingBottom: '10pt',
                                minHeight: '80pt', width: '180pt', display: 'flex',
                                alignItems: 'center', justifyContent: 'center', margin: '10pt', borderRadius: '10pt',
                                boxShadow: '1px 1px 30px rgb(220,220,220)',
                                flexDirection:'column'
                            }}>
                            <img src={client.logo} style={{height:'10vh'}} />
                            <div style={{fontSize:'10pt',marginTop:'5pt'}}>{client.name}</div>
                        </a>
                    ))
                }
            </div>
        </div>
    )
}

export default ClientSlider
