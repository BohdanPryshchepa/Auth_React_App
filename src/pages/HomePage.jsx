import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from 'hooks/use-auth'
import { useDispatch } from 'react-redux';
import { removeUser } from 'store/slices/userSlice';
import "../components/Form.css"
// import './home.scss'
import '../index.css';



const HomePage = () => {
  const dispatch = useDispatch();

  const {isAuth, email }= useAuth();



  return isAuth ? (
    <div className="form-container">
      <h1>Welcome</h1>
      
      <button
       onClick={() => dispatch(removeUser())}
      >
        Log out from {email}
      </button>
      <div className='page entry-content'>
      <div style={{marginTop:'100px'}}>
      <h1>
        <span>
          Dota 2 Freaks
        </span>
        Beginner Guides, Hero Combos and Tools
      </h1>
      <div className="gt-kb">
        <div className="gt-kb-box kb1">
          <span className="kb-headline">Dota 2 Basics</span>
          <p></p>
          <ul>
            <li>
              <a href="https://dota2freaks.com/beginner-guide/">Dota 2 Beginner Guide</a>
            </li>
            <li>
              <a href="https://dota2freaks.com/tools/">Dota 2 Tools</a>
            </li>
            <li>
              <a href="https://dota2freaks.com/maps/">Top Dota 2 Custom Maps</a>
            </li>
            </ul>
          </div>
          <div className="gt-kb-box kb2"> 
            <span className="kb-headline">Getting Better</span>
            <p></p>
            <ul>
              <li>
                <a href="https://dota2freaks.com/guides/">All Dota 2 Guides</a>
              </li>
              <li>
                <a href="https://dota2freaks.com/hero-guides/">Hero Single Guides</a>
              </li>
              <li>
                <a href="https://dota2freaks.com/hero-combos/">Strong Hero Combos</a>
              </li>
            </ul>
          </div>
            <div className="gt-kb-box kb3"> 
              <span className="kb-headline">Dota 2 Ranks</span>
              <p></p>
              <ul>
                <li>
                  <a href="https://dota2freaks.com/ranks/">All Ranks (MMR Table)</a>
              </li>
              <li>
                <a href="https://dota2freaks.com/increase-rank/">How to Rank Up</a>
              </li>
              <li>
                <a href="https://dota2freaks.com/progamer/">Pro Players List</a>
              </li>
              </ul>
            </div>
      </div>
      </div>
      <h2>Detailled Dota 2 Guides:</h2>
      <div className="gt-grid tools booklist grid4 center">
         <a href="https://dota2freaks.com/beginner-guide/" className="tool">
          <span className="tool-image">
            <img decoding="async" src="https://dota2freaks.com/wp-content/uploads/sites/10/2020/02/dota-2-beginner-guide-book.png" alt="Dota 2 Beginner Guide Book" width="350" height="420" className="alignnone size-full wp-image-4630" srcset="https://dota2freaks.com/wp-content/uploads/sites/10/2020/02/dota-2-beginner-guide-book.png 350w, https://dota2freaks.com/wp-content/uploads/sites/10/2020/02/dota-2-beginner-guide-book-250x300.png 250w, https://dota2freaks.com/wp-content/uploads/sites/10/2020/02/dota-2-beginner-guide-book-25x30.png 25w" sizes="(max-width: 350px) 100vw, 350px" /></span>
            <span>Ultimate Dota 2
              <br/> Beginner Guide
            </span>
          </a>
          <a href="https://dota2freaks.com/support-guide/" className="tool">
          <span className="tool-image">
          <img decoding="async" loading="lazy" src="https://dota2freaks.com/wp-content/uploads/sites/10/2020/03/dota-2-support-guide-book.png" alt="Dota 2 Support Guide Book" width="350" height="420" className="alignnone size-full wp-image-5911" srcset="https://dota2freaks.com/wp-content/uploads/sites/10/2020/03/dota-2-support-guide-book.png 350w, https://dota2freaks.com/wp-content/uploads/sites/10/2020/03/dota-2-support-guide-book-250x300.png 250w, https://dota2freaks.com/wp-content/uploads/sites/10/2020/03/dota-2-support-guide-book-25x30.png 25w" sizes="(max-width: 350px) 100vw, 350px" />
          </span>
          <span>Ultimate Dota 2
            <br/> Support Guide
          </span>
          </a>
          <a href="https://dota2freaks.com/warding/" className="tool"><span className="tool-image">
          <img decoding="async" loading="lazy" src="https://dota2freaks.com/wp-content/uploads/sites/10/2020/03/dota-2-warding-guide-book.png" alt="Dota 2 Warding Guide Book" width="350" height="420" className="alignnone size-full wp-image-5328" srcset="https://dota2freaks.com/wp-content/uploads/sites/10/2020/03/dota-2-warding-guide-book.png 350w, https://dota2freaks.com/wp-content/uploads/sites/10/2020/03/dota-2-warding-guide-book-250x300.png 250w, https://dota2freaks.com/wp-content/uploads/sites/10/2020/03/dota-2-warding-guide-book-25x30.png 25w" sizes="(max-width: 350px) 100vw, 350px" />
          </span><span>Ultimate Dota 2<br/> Warding Guide</span>
          </a>
          <span className="ezoic-autoinsert-video ezoic-under_second_paragraph"></span>
          <a href="https://dota2freaks.com/increase-rank/" className="tool"><span className="tool-image">
          <img decoding="async" loading="lazy" src="https://dota2freaks.com/wp-content/uploads/sites/10/2019/07/dota-2-book-how-to-rank-up.png" alt="Dota 2 Book How to rank up" width="350" height="420" className="alignnone size-full wp-image-3801" srcset="https://dota2freaks.com/wp-content/uploads/sites/10/2019/07/dota-2-book-how-to-rank-up.png 350w, https://dota2freaks.com/wp-content/uploads/sites/10/2019/07/dota-2-book-how-to-rank-up-250x300.png 250w, https://dota2freaks.com/wp-content/uploads/sites/10/2019/07/dota-2-book-how-to-rank-up-25x30.png 25w" sizes="(max-width: 350px) 100vw, 350px" />
          </span>
          <span>Ultimate Guide:
          <br/> How to rank up in Dota 2
          </span>
          </a>
      </div>
      <p>
        <a href="https://dota2freaks.com/guides/" className="button button-medium game-color center bntView">
          View all Dota 2 Guides
        </a>
      </p>
        <div className='gt6-full gtdark nospace margintop99 paddingbottonzero'>
          <div className='gt6-full-content'>
            <h2></h2>
            <div className='home-dualboxes'>
              <div className="home-dualbox">
                <div className="dualbox-header dualbox-header-heroes">
                  <h2>Top Hero Guides:</h2>
                  </div>
                  <ul className="toplist">
                    <li>
                      <a href="https://dota2freaks.com/phantom-assassin/">
                        <img decoding="async" loading="lazy" src="https://dota2freaks.com/wp-content/uploads/sites/10/2020/03/dota-2-hero-guide-phantom-assassin-150x150.jpg" alt="Phantom Assassin Hero Guide" width="150" height="150" className="alignleft size-thumbnail wp-image-5453" srcset="https://dota2freaks.com/wp-content/uploads/sites/10/2020/03/dota-2-hero-guide-phantom-assassin-150x150.jpg 150w, https://dota2freaks.com/wp-content/uploads/sites/10/2020/03/dota-2-hero-guide-phantom-assassin.jpg 300w, https://dota2freaks.com/wp-content/uploads/sites/10/2020/03/dota-2-hero-guide-phantom-assassin-30x30.jpg 30w" sizes="(max-width: 150px) 100vw, 150px" />
                        High MMR Phantom Assassin
                        </a>
                        </li>
                        <li>
                          <a href="https://dota2freaks.com/radiance-lifestealer/">
                        <img decoding="async" loading="lazy" src="https://dota2freaks.com/wp-content/uploads/sites/10/2019/07/dota-2-lifestealer-hero-guide-radiance-ownage-150x150.jpg" alt="Dota 2 Lifestealer Hero Guide Radiance Ownage" width="150" height="150" className="alignleft size-thumbnail wp-image-3344" />
                        Lifestealer Radiance Style
                        </a>
                        </li>
                        <li>
                        <a href="https://dota2freaks.com/high-crit-kunkka/">
                        <img decoding="async" loading="lazy" src="https://dota2freaks.com/wp-content/uploads/sites/10/2019/06/kunkka-guide-dota-2-150x150.jpg" alt="Dota 2 Kunkka Hero Guide" width="150" height="150" className="alignleft size-thumbnail wp-image-542" />
                        Kunkka High Crit
                        </a>
                        </li>
                        </ul>
              </div>
             <div className="home-dualbox"
             ><div className="dualbox-header dualbox-header-tactics"
             ><h2>Top Tactics &amp; Combos:</h2>
             </div>
             <ul className="toplist"><li><a href="https://dota2freaks.com/tactic-global-killers/">
             <img decoding="async" loading="lazy" src="https://dota2freaks.com/wp-content/uploads/sites/10/2020/01/dota-2-tactic-global-killers-150x150.jpg" alt="Dota 2 Tactic Global Killers" width="150" height="150" className="alignleft size-thumbnail wp-image-3470" />
             Global Killers (5vs5)
             </a>
             </li>
             <li>
              <a href="https://dota2freaks.com/5vs5-axe-snowball/">
               <img decoding="async" loading="lazy" src="https://dota2freaks.com/wp-content/uploads/sites/10/2020/01/dota-2-tactic-axe-healing-150x150.jpg" alt="Dota 2 Tactic Axe Healing" width="150" height="150" className="alignleft size-thumbnail wp-image-3607" />
               Axe Snowball Healing Push (5vs5)
               </a>
               </li>
               <li>
                <a href="https://dota2freaks.com/sleepy-death/">
                  <img decoding="async" loading="lazy" src="https://dota2freaks.com/wp-content/uploads/sites/10/2020/03/dota-2-strategy-naga-combo-150x150.jpg" alt="Naga Combo Tactic" width="150" height="150" className="alignleft size-thumbnail wp-image-5814" srcset="https://dota2freaks.com/wp-content/uploads/sites/10/2020/03/dota-2-strategy-naga-combo-150x150.jpg 150w, https://dota2freaks.com/wp-content/uploads/sites/10/2020/03/dota-2-strategy-naga-combo.jpg 300w, https://dota2freaks.com/wp-content/uploads/sites/10/2020/03/dota-2-strategy-naga-combo-30x30.jpg 30w" sizes="(max-width: 150px) 100vw, 150px" />
                  Sleepy Naga Death Tactic (5vs5)
                  </a>
                  </li>
                  </ul>
             </div>
             <div className="home-dualbox">
                <div className="dualbox-header dualbox-header-basics">
                  <h2>Dota 2 Basics:</h2>
                  </div>
                    <ul className="toplist">
                      <li>
                        <a href="https://dota2freaks.com/report/">
                          <img decoding="async" loading="lazy" src="https://dota2freaks.com/wp-content/uploads/sites/10/2019/07/dota-2-report-150x150.jpg" alt="Dota 2 Report" width="150" height="150" className="alignleft size-thumbnail wp-image-903" />
                            Dota 2 Reports &amp; Bans (FAQ)
                            </a>
                      </li>
                      <li>
                        <a href="https://dota2freaks.com/ping/">
                          <img decoding="async" loading="lazy" src="https://dota2freaks.com/wp-content/uploads/sites/10/2019/06/dota-2-ping-150x150.jpg" alt="Dota 2 Ping" width="150" height="150" className="alignleft size-thumbnail wp-image-1461" />
                          Fixing your Ping in Dota 2
                          </a>
                      </li>
                      <li>
                        <a href="https://dota2freaks.com/fps/">
                        <img decoding="async" loading="lazy" src="https://dota2freaks.com/wp-content/uploads/sites/10/2019/06/dota-2-fps-1-150x150.jpg" alt="How to see your FPS in Dota 2" width="150" height="150" className="alignleft size-thumbnail wp-image-1433" />
                         Improving your FPS in Dota 2
                         </a>
                      </li>
                      <li>
                        <a href="https://dota2freaks.com/how-to-see-mmr/">
                        <img decoding="async" loading="lazy" src="https://dota2freaks.com/wp-content/uploads/sites/10/2019/07/dota-2-how-to-see-mmr-150x150.jpg" alt="Dota 2 How to see MMR" width="150" height="150" className="alignleft size-thumbnail wp-image-1651" />
                         How to see your MMR
                         </a>
                      </li>
                      <li>
                        <a href="https://dota2freaks.com/taunts/">
                          <img decoding="async" loading="lazy" src="https://dota2freaks.com/wp-content/uploads/sites/10/2019/06/dota-2-taunt-guide-150x150.jpg" alt="Dota 2 Taunt Guide" width="150" height="150" className="alignleft size-thumbnail wp-image-429" />
                           How to use Taunts in Dota 2
                           </a>
                      </li>
                      <li>
                        <a href="https://dota2freaks.com/core-and-support-mmr/">
                        <img decoding="async" loading="lazy" src="https://dota2freaks.com/wp-content/uploads/sites/10/2019/08/dota-2-core-and-support-mmr-150x150.jpg" alt="Dota 2 Support and Core MMR" width="150" height="150" className="alignleft size-thumbnail wp-image-1833" />
                        Support &amp; Core MMR Update
                        </a>
                      </li>
                      <li>
                        <a href="https://dota2freaks.com/create-custom-game/">
                        <img decoding="async" loading="lazy" src="https://dota2freaks.com/wp-content/uploads/sites/10/2019/06/Custom-lobby-in-dota2-150x150.jpg" alt="Custom Game Lobby in dota 2" width="150" height="150" className="alignleft size-thumbnail wp-image-462" />
                        How to create Dota 2 Lobbies
                        </a>
                      </li>
                      <li>
                        <a href="https://dota2freaks.com/cheats/">
                        <img decoding="async" loading="lazy" src="https://dota2freaks.com/wp-content/uploads/sites/10/2019/07/dota-2-cheats-150x150.jpg" alt="Dota 2 Cheats" width="150" height="150" className="alignleft size-thumbnail wp-image-2807" />
                        Dota 2 Cheats
                        </a>
                      </li>
                      <li>
                        <a href="https://dota2freaks.com/system-requirements/">
                        <img decoding="async" loading="lazy" src="https://dota2freaks.com/wp-content/uploads/sites/10/2019/06/dota-2-on-laptop-150x150.jpg" alt="Play Dota 2 on Laptop" width="150" height="150" className="alignleft size-thumbnail wp-image-442" />
                        Dota 2 System Requirements
                        </a>
                      </li>
                    </ul>
              </div>
              <div className="home-dualbox">
                <div className="dualbox-header dualbox-header-guides">
                  <h2>Dota 2 Guides:</h2>
                </div>
                <ul className="toplist">
                  <li>
                    <a href="https://dota2freaks.com/beginner-guide/">
                      <img decoding="async" loading="lazy" src="https://dota2freaks.com/wp-content/uploads/sites/10/2020/02/dota-2-beginner-guide-150x150.jpg" alt="Dota 2 Beginner Guide" width="150" height="150" className="alignleft size-thumbnail wp-image-4629" />
                      Dota 2 Beginner Guide
                    </a>
                  </li>
                  <li>
                    <a href="https://dota2freaks.com/stacking-guide/">
                      <img decoding="async" loading="lazy" src="https://dota2freaks.com/wp-content/uploads/sites/10/2019/06/dota-2-stacking-and-pulling-guide-150x150.jpg" alt="Dota 2 Stacking and Pulling Guide" width="150" height="150" className="alignleft size-thumbnail wp-image-2877" />
                      Stacking &amp; Pulling Guide
                    </a>
                  </li>
                  <li>
                    <a href="https://dota2freaks.com/increase-rank/">
                      <img decoding="async" loading="lazy" src="https://dota2freaks.com/wp-content/uploads/sites/10/2019/07/dota-2-how-to-increase-rank-150x150.jpg" alt="Dota 2 How to increase the rank" width="150" height="150" className="alignleft size-thumbnail wp-image-3803" />
                      Ultimate Guide to Boost your Rank
                    </a>
                  </li>
                  <li>
                    <a href="https://dota2freaks.com/ranking-guide/">
                    <img decoding="async" loading="lazy" src="https://dota2freaks.com/wp-content/uploads/sites/10/2019/07/dota-2-mmr-ranks-150x150.jpg" alt="Dota 2 MMR Ranks" width="150" height="150" className="alignleft size-thumbnail wp-image-2198" />
                      Understanding the Dota 2 MMR
                    </a>
                  </li>
                  <li>
                    <a href="https://dota2freaks.com/positions/">
                      <img decoding="async" loading="lazy" src="https://dota2freaks.com/wp-content/uploads/sites/10/2019/07/dota-2-positions-guide-150x150.jpg" alt="Dota 2 Positions Guide" width="150" height="150" className="alignleft size-thumbnail wp-image-3701" />
                      Dota 2 Position/Role Guide
                    </a>
                  </li>
                  <li>
                    <a href="https://dota2freaks.com/calibration/">
                      <img decoding="async" loading="lazy" src="https://dota2freaks.com/wp-content/uploads/sites/10/2019/12/calibration-dota-2-ranks-150x150.jpg" alt="" width="150" height="150" className="alignleft size-thumbnail wp-image-3223" />
                       Dota 2 Calibration Guide
                    </a>
                  </li
                  ><li>
                    <a href="https://dota2freaks.com/runes/">
                      <img decoding="async" loading="lazy" src="https://dota2freaks.com/wp-content/uploads/sites/10/2019/06/dota-2-runes-150x150.jpg" alt="Dota 2 Runes" width="150" height="150" className="alignleft size-thumbnail wp-image-962" />
                      Mastering Runes
                    </a>
                  </li>
                  <li>
                    <a href="https://dota2freaks.com/quick-cast/">
                      <img decoding="async" loading="lazy" src="https://dota2freaks.com/wp-content/uploads/sites/10/2019/06/dota-2-quick-cast-guide-150x150.jpg" alt="Dota 2 Quick Cast Guide" width="150" height="150" className="alignleft size-thumbnail wp-image-434" />
                      Simple Quick Cast Guide
                    </a>
                    </li>
                    <li>
                    <a href="https://dota2freaks.com/roshan-respawn-timer/">
                      <img decoding="async" loading="lazy" src="https://dota2freaks.com/wp-content/uploads/sites/10/2019/06/dota-2-roshan-timer-150x150.jpg" alt="Dota 2 Roshan Timer" width="150" height="150" className="alignleft size-thumbnail wp-image-430" />
                      Dota 2 Roshan Guide
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="gt6-full gtdark nospace paddingbottomzero">
            <div className="gt6-full-content">
              <h2>Dota 2 Progamer:</h2>
              <div className="gt-spotlights">
                <div className="gt-spotlight">
                  <a href="https://dota2freaks.com/notail/">
                    <img decoding="async" loading="lazy" src="https://dota2freaks.com/wp-content/uploads/sites/10/2019/09/notail.jpg" alt="Dota 2 Notail" width="175" height="261" className="alignnone size-full wp-image-2906" srcset="https://dota2freaks.com/wp-content/uploads/sites/10/2019/09/notail.jpg 175w, https://dota2freaks.com/wp-content/uploads/sites/10/2019/09/notail-20x30.jpg 20w" sizes="(max-width: 175px) 100vw, 175px" />
                  </a>
                </div>
                <div className="gt-spotlight">
                  <a href="https://dota2freaks.com/topson/">
                    <img decoding="async" loading="lazy" src="https://dota2freaks.com/wp-content/uploads/sites/10/2019/09/topson.jpg" alt="Dota 2 Topson" width="175" height="261" className="alignnone size-full wp-image-2907" srcset="https://dota2freaks.com/wp-content/uploads/sites/10/2019/09/topson.jpg 175w, https://dota2freaks.com/wp-content/uploads/sites/10/2019/09/topson-20x30.jpg 20w" sizes="(max-width: 175px) 100vw, 175px" />
                  </a>
                </div>
                <div className="gt-spotlight">
                  <a href="https://dota2freaks.com/jerax/">
                    <img decoding="async" loading="lazy" src="https://dota2freaks.com/wp-content/uploads/sites/10/2019/09/jerax.jpg" alt="Dota 2 Jerax" width="175" height="261" className="alignnone size-full wp-image-2905" srcset="https://dota2freaks.com/wp-content/uploads/sites/10/2019/09/jerax.jpg 175w, https://dota2freaks.com/wp-content/uploads/sites/10/2019/09/jerax-20x30.jpg 20w" sizes="(max-width: 175px) 100vw, 175px" />
                  </a>
                </div>
                <div className="gt-spotlight">
                  <a href="https://dota2freaks.com/ceb/">
                    <img decoding="async" loading="lazy" src="https://dota2freaks.com/wp-content/uploads/sites/10/2019/09/ceb.jpg" alt="Dota 2 Ceb" width="175" height="261" className="alignnone size-full wp-image-2904" srcset="https://dota2freaks.com/wp-content/uploads/sites/10/2019/09/ceb.jpg 175w, https://dota2freaks.com/wp-content/uploads/sites/10/2019/09/ceb-20x30.jpg 20w" sizes="(max-width: 175px) 100vw, 175px" />
                  </a>
                </div>
                <div className="gt-spotlight">
                  <a href="https://dota2freaks.com/ana/">
                    <img decoding="async" loading="lazy" src="https://dota2freaks.com/wp-content/uploads/sites/10/2019/09/ana.jpg" alt="Dota 2 Ana" width="175" height="261" className="alignnone size-full wp-image-2903" srcset="https://dota2freaks.com/wp-content/uploads/sites/10/2019/09/ana.jpg 175w, https://dota2freaks.com/wp-content/uploads/sites/10/2019/09/ana-20x30.jpg 20w" sizes="(max-width: 175px) 100vw, 175px" />
                  </a>
                </div>
                <div className="gt-spotlight">
                  <a href="https://dota2freaks.com/kuroky/">
                    <img decoding="async" loading="lazy" src="https://dota2freaks.com/wp-content/uploads/sites/10/2019/09/kuroky.jpg" alt="Dota 2 Kuroky" width="175" height="261" className="alignnone size-full wp-image-2910" srcset="https://dota2freaks.com/wp-content/uploads/sites/10/2019/09/kuroky.jpg 175w, https://dota2freaks.com/wp-content/uploads/sites/10/2019/09/kuroky-20x30.jpg 20w" sizes="(max-width: 175px) 100vw, 175px" />
                  </a>
                </div>
                </div>
                <p>
                  <a href="https://dota2freaks.com/progamer/" className="button button-big game-color center">
                    Progamer Toplist
                  </a>
                  <br/>
                </p>
                </div>
                <span className="ezoic-autoinsert-ad ezoic-longest_content">
                  </span>
                <div className="gt6-full gtdark nospace paddingbottom96">
                  <div className="gt6-full-content">
                    <div className="home-dualbox big">
                    <div className="dualbox-header dualbox-big-header">
                      <h2>Dota 2 News &amp; Updates:</h2>
                    </div>
                    <ul className="lcp_catlist" id="lcp_instance_0">
                      <li>
                        <a href="https://dota2freaks.com/notail/">
                          Dota 2 Pro Notail – The Most Successful Dota 2 Captain Ever
                        </a>
                      </li>
                      <li>
                        <a href="https://dota2freaks.com/topson/">
                          Dota 2 Pro Topson – The Creative Solo Mid Dominator
                        </a>
                      </li>
                      <li>
                        <a href="https://dota2freaks.com/new-dota-2-hero-snapfire/">
                          New Dota 2 Hero: Snapfire Introduction (Coming After TI9)
                        </a>
                      </li>
                      <li>
                        <a href="https://dota2freaks.com/new-dota-2-hero-void-spirit/">
                           New Dota 2 Hero: Void Spirit Introduction (Coming After TI9)
                        </a>
                      </li>
                      <li>
                        <a href="https://dota2freaks.com/miracle/">
                          Miracle The Best Dota 2 Progamer Ever with over 9000 MMR
                        </a>
                      </li>
                      <li>
                        <a href="https://dota2freaks.com/dendi/">
                          Dendi – The Funniest Dota 2 Pro – His Career and E-Sport Income
                        </a>
                      </li>
                      <li>
                        <a href="https://dota2freaks.com/international-2019/">
                          Dota 2 International 2019
                        </a>
                      </li>
                      <li>
                        <a href="https://dota2freaks.com/core-and-support-mmr/">
                          New Dota 2 Ranked Roles: Core and Support MMR
                        </a>
                      </li>
                    </ul>
                    <ul className="lcp_paginator">
                      <li>
                        <a href="https://dota2freaks.com/?ref=xranks&amp;lcp_page0=5#lcp_instance_0" title="5" className="lcp_prevlink">
                          &lt;&lt;
                        </a>
                      </li>
                      <li>
                        <a href="https://dota2freaks.com/?ref=xranks&amp;lcp_page0=1#lcp_instance_0" title="1">
                          1
                        </a>
                      </li>
                      <li>
                        <a href="https://dota2freaks.com/?ref=xranks&amp;lcp_page0=2#lcp_instance_0" title="2">
                          2
                        </a>
                      </li>
                      <li>
                        <a href="https://dota2freaks.com/?ref=xranks&amp;lcp_page0=3#lcp_instance_0" title="3">
                          3
                        </a>
                      </li>
                      <li>
                        <a href="https://dota2freaks.com/?ref=xranks&amp;lcp_page0=4#lcp_instance_0" title="4">
                          4
                        </a>
                      </li>
                      <li>
                        <a href="https://dota2freaks.com/?ref=xranks&amp;lcp_page0=5#lcp_instance_0" title="5">
                          5
                        </a>
                      </li>
                      <li className="lcp_currentpage">
                        6
                      </li>
                      <li>
                        <a href="https://dota2freaks.com/?ref=xranks&amp;lcp_page0=7#lcp_instance_0" title="7">
                          7
                        </a>
                      </li>
                      <li>
                        <a href="https://dota2freaks.com/?ref=xranks&amp;lcp_page0=8#lcp_instance_0" title="8">
                          8
                        </a>
                      </li>
                      <li>
                        <a href="https://dota2freaks.com/?ref=xranks&amp;lcp_page0=7#lcp_instance_0" title="7" className="lcp_nextlink">
                          &gt;&gt;
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="gt6-full white nospace">
            <span id="ezoic-pub-ad-placeholder-116" className="ezoic-adpicker-ad" style={{display:"none !important;"}}>
            </span>
            <div className="gt6-full-content">
              <h2>Dota 2 Guides, Tools, Maps and Patches</h2>
              <span className="ezoic-autoinsert-video ezoic-longest_content"></span>
              <p>Welcome to Dota 2 Freaks – this page is for all who love to play Dota 2. No matter if you are playing since 
                <a href="https://gaming-tools.com/warcraft-3/">
                  Dota 1
                </a> or if you are a new player, on this page you can find
               <strong>game basics, lists, beginner guides and also advanced guides</strong>
               </p>
               <span id="ezoic-pub-ad-placeholder-901" data-method="placement-service"></span>
               <span className="ezoic-ad ezoic-at-0 box-3 box-3901 adtester-container adtester-container-901" data-ez-name="dota2freaks_com-box-3" style={{display: "none !important;"}}>
               <span id="div-gpt-ad-dota2freaks_com-box-3-0" ezaw="728" ezah="90" style={{position:"relative", zIindex: "0", display: "none !important", padding:" 0px", minHeight: "90px", miWidth:"728px"}} className="ezoic-ad">
              </span>
              </span>
              <p>What you can find here:</p>
              <ul>
                <li>
                  <h3 className="left">
                    Dota 2 Beginner Tips:
                  </h3>
              <p>Any question you ever had has to be answered, the Dota 2 world is big, but with some basic tips and advice it’s easy to master and you will make big steps. Inhale our
                 <strong>Dota 2 starter guides</strong>
                 and level up your playstyle!
              </p>
              <span id="ezoic-pub-ad-placeholder-909" data-method="placement-service"></span>
                </li>
                <li>
                  <h3 className="left">Super Unique and Personal Dota 2 Hero Guides:</h3>
                  <p>I am publishing super unique hero guides for Dota 2 – the focus on these guides lies on the personal perspective. The tips are extremely personal and show you a way how any hero can own the whole battlefield. In the guide section I collect guides from players where they only write a guide about their best, favorite and most played hero. If you also have a 
                    <strong>special way to play your best hero</strong>, you can 
                  <a href="https://dota2freaks.com/favorite-hero/">submit your personal Dota 2 guide</a>.
                  </p><span className="ezoic-autoinsert-video ezoic-longer_content">
                  </span>
                </li>
                <li>
                  <h3 className="left">TeamTactics for Dota 2 Clans and Friends (2-5 players):</h3>
                  <p>You know what’s awesome in Dota 2? If you have a bunch of tactics you can shoot out, where you know that they are strong. Beside beeing a good picker, known
                     <strong>Dota 2 strategies and synergies of each meta are key to have success with parties in ranked matches</strong>.
                  </p><span id="ezoic-pub-ad-placeholder-910" data-method="placement-service"></span>
                </li>
                <li>
                  <h3 className="left">Dota 2 News, New Heroes and Patch Updates:</h3>
                  <p>The game is developing fast, stay always up to date and learn how you can profit from new patch updates. In the tools section I publish all of the 
                    <strong>apps, tools and websites</strong> 
                  that are useful to be a
                    <strong>successfull player in the Dota 2 universe</strong>.
                  </p>
                </li>
                <li>
                  <h3 className="left">E-Sport Coverage of Dota 2 Events and Pro Players:</h3>
                  <p>Find E-Sport Income lists of all Dota 2 Progamers, their personal story and clan history. The Dota 2 International events got an 
                    <a href="https://dota2freaks.com/prize-pool/">incredible price pool every year</a>
                    , which pro teams will get the next trophy?
                  </p>
                </li>
              </ul>
              <h2>About Dota 2 Freaks</h2>
              <p>Welcome to Dota2freaks I am happy you are here. 🙂 On this webseite I am taking care of every topic a new player could face. It’s a strong source of knowledge and tools for every Dota 2 player. The onboarding into Dota 2 is quite difficult, every new Dota 2 player has to learn so much: 
                <strong>All of the heroes, items, spells and game mechanics</strong>.
              </p>
              <span id="ezoic-pub-ad-placeholder-911" data-method="placement-service"></span>
              <p>On Dotafreaks I try to help and answer all of the questions and I put hard work into it. Of course also advanced and pro tips are gathered and collected to allow increasing your MMR. Save a bookmark of Dota2freaks, any support is wanted so that I can add more quality content.
              </p>
              <p>See you online &amp; have fun playing! 😉
              </p>
            </div>
          </div>
    </div>
    </div>
    
    ):(
    <Navigate to="/login" />
  )
}

export default HomePage
