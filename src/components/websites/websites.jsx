import "./websites.css";
import hma from "../../assets/hma.webp";
import carpet from "../../assets/carpetnow.webp";
import opm from "../../assets/opm.webp";
import shiptons from "../../assets/shiptons.webp";
import triple from "../../assets/triple.webp";
import parish from "../../assets/parish.webp";
import mastertech from "../../assets/mastertech.webp";
import microsite from "../../assets/microsite.webp";

export const Websites = ({lan})=>{
        return (
            <section className="websites">
                {lan === 'eng' ?
                <>
                <h5>My recent work</h5>
                <h2>My Websites</h2>
                </> :
                <>
                <h5>Mi trabajo reciente</h5>
                <h2>Mis Sitios Web</h2>
                </>}
                <div className="websites-grid">
                    <div className="website-card">
                        <a href="https://hvacmarketingagency.com/">
                            <span className="website-title">HVAC Marketing Agency</span>
                            <img src={hma} alt="" />
                        </a>
                    </div>
                    <div className="website-card">
                        <a href="https://callmastertech.com/">
                            <span className="website-title">Call Master Tech</span>
                            <img src={microsite} alt="" />
                        </a>
                    </div>
                    <div className="website-card">
                        <a href="https://calltripleplay.com/">
                            <span className="website-title">Triple Play Home Services</span>
                            <img src={triple} alt="" />
                        </a>
                    </div>
                    <div className="website-card">
                        <a href="https://shiptons.ca/">
                            <span className="website-title">Shipton's HVAC</span>
                            <img src={shiptons} alt="" />
                        </a>
                    </div>
                    <div className="website-card">
                        <a href="https://onpurposemedia.ca/">
                            <span className="website-title">On Purpose Media</span>
                            <img src={opm} alt="" />
                        </a>
                    </div>
                    <div className="website-card">
                        <a href="https://carpetnow.com/">
                            <span className="website-title">Carpet Now</span>
                            <img src={carpet} alt="" />
                        </a>
                    </div>
                    <div className="website-card">
                        <a href="https://mastertechtexas.com/">
                            <span className="website-title">MasterTech Texas</span>
                            <img src={mastertech} alt="" />
                        </a>
                    </div>
                    <div className="website-card">
                        <a href="https://parishhvac.com/">
                            <span className="website-title">Parish HVAC</span>
                            <img src={parish} alt="" />
                        </a>
                    </div>
                </div>
            </section>
        )
};