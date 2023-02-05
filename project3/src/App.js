
import 'bulma/css/bulma.css'
import ProfileCard from './ProfileCard'
import AlexaImage from './images/alexa.png'
import CortanaImage from './images/cortana.png'
import SiriImage from './images/siri.png'





function App (){
    return (
        <div>
            <section className='hero is-primary'>
                <div className='hero-body'>
                    <p className='title'>Personal Digital Assistants
                    </p>
                </div>
            </section>

            <div className='conatiner'>
                <section className='section'>
                    <div className='columns'>
                        <div className='column is-4'>
                            <ProfileCard title = "Alexa" 
                            handle = "@alexa99" 
                            image = {AlexaImage}
                            des = "Alexa was created by amazaon "/>  
                        </div>
                        <div className='column is-4'>
                            <ProfileCard
                             title = "Cortana" 
                             handle = "@cortana32" 
                             image = {CortanaImage}
                             des = "Cortana is worst made by samsung"
                             />
                        </div>
                        <div className='column is-4'>
                            <ProfileCard title = "Siri" 
                            handle = "@siri01" 
                            image = {SiriImage}
                            des = "siri is not op anymore"
                            />  
                        </div>

                    </div>
                </section>
            </div>

            
            
            
        </div>

    );
}
export default App;