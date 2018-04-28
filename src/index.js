import React from 'react';
import { render } from 'react-dom';
import MediaQuery from 'react-responsive';
import {Tooltip} from 'react-lightweight-tooltip';

import '../node_modules/xwing-miniatures-font/dist/xwing-miniatures.css';
import './css/csb.css';

const xwtt = {
  wrapper: {
    color: 'inherit',
  },
  tooltip: {
    borderRadius: '0.3rem',
    fontSize: '0.9rem',
    lineHeight: '1rem',
    textAlign: 'center',
    minWidth: '6rem',
    maxWidth: '20rem',
    background: '#3E3E3E',
    marginBottom: '0.5rem',
    padding: '0.3rem 0.8rem',
  },
  content: {
    padding: '0',
    fontSize: '0.9rem',
    lineHeight: '0.4rem',
    fontFamily: 'Helvetica, Arial, "Lucida Grande", sans-serif',
    background: '#3E3E3E',
  },
  arrow: {
    bottom: '-0.4rem',
    marginLeft: '-0.3rem',
    borderTop: 'solid #3E3E3E 0.45rem',
  },
  gap: {
    height: '0.7rem',
    bottom: '-0.7rem',
  },
};

const xwtt_lg = Object.assign({...xwtt}, {
  tooltip: Object.assign({...xwtt.tooltip}, {
    minWidth: '18em',
  }),
});


const App = () => (
  <div className="squad-container">

    <div className="squad-item-container no-ship no-pilot clearfix">
      <div className="squad-item-ship galactic-empire">
        <div className="points-container">
          <div className="faction">
            <i className="xwing-miniatures-font xwing-miniatures-font-empire"></i>
          </div>
        </div>
        <div className="id-container">
          <div className="ship-type">Ship</div>
        </div>
      </div>
    </div>


    <div className="squad-item-container no-pilot clearfix">
      <div className="squad-item-ship galactic-empire">

        <div className="pilot-container">
          <div className="ship-type-icon">
            <i className="xwing-miniatures-ship xwing-miniatures-ship-tieadvanced"></i>
          </div>
          <div className="pilot-skill">?</div>
          <div className="pilot-tier tier-undefined"><img alt="Tier undefined" src={require('./img/tier-undefined.svg')} /></div>
        </div>

        <div className="points-container">
          <div className="faction">
            <i className="xwing-miniatures-font xwing-miniatures-font-empire"></i>
          </div>
          <div className="points">?</div>
        </div>

        <div className="id-container">
          <div className="ship-type">Tie Advanced x1</div>
          <div className="pilot">Pilot</div>
        </div>

        <div className="ship-container">
          <div className="stats-container">
            <div className="stat attack">
              <i className="xwing-miniatures-font xwing-miniatures-font-attack"></i><span>2</span>
            </div>
            <div className="stat agility">
              <i className="xwing-miniatures-font xwing-miniatures-font-agility"></i><span>3</span>
            </div>
            <div className="stat hull">
              <i className="xwing-miniatures-font xwing-miniatures-font-hull"></i><span>3</span>
            </div>
            <div className="stat shield">
              <i className="xwing-miniatures-font xwing-miniatures-font-shield"></i><span>2</span>
            </div>
          </div>
          <div className="action-container">
            <div className="action focus">
              <i className="xwing-miniatures-font xwing-miniatures-font-focus"></i>
            </div>
            <div className="action targetlock">
              <i className="xwing-miniatures-font xwing-miniatures-font-targetlock"></i>
            </div>
            <div className="action barrelroll">
              <i className="xwing-miniatures-font xwing-miniatures-font-barrelroll"></i>
            </div>
            <div className="action evade">
              <i className="xwing-miniatures-font xwing-miniatures-font-evade"></i>
            </div>
          </div>
        </div>

        <div className="pilot-ability-container"></div>

        <div className="upgrades-container">
          <div className="upgrade title empty">
            <i className="xwing-miniatures-font xwing-miniatures-font-title"></i>
            <span className="name">Title</span>
          </div>
          <div className="upgrade modification empty">
            <i className="xwing-miniatures-font xwing-miniatures-font-modification"></i>
            <span className="name">Modification</span>
          </div>
          <div className="upgrade elite empty">
            <i className="xwing-miniatures-font xwing-miniatures-font-elite"></i>
            <span className="name">Elite Pilot Talent</span>
          </div>
          <div className="upgrade missile empty">
            <i className="xwing-miniatures-font xwing-miniatures-font-missile"></i>
            <span className="name">Missile</span>
          </div>
        </div>

        <div className="manoevers-container">
          <table className="manoevers">
            <tbody>
              <tr>
                <th className="speed">5</th>
                <td></td>
                <td></td>
                <td className="straight white"><i className="xwing-miniatures-font xwing-miniatures-font-straight"></i></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th className="speed">4</th>
                <td></td>
                <td></td>
                <td className="straight white">
                  <i className="xwing-miniatures-font xwing-miniatures-font-straight"></i>
                </td>
                <td></td>
                <td></td>
                <td className="kturn red">
                  <i className="xwing-miniatures-font xwing-miniatures-font-kturn"></i>
                </td>
              </tr>
              <tr>
                <th className="speed">3</th>
                <td className="turnleft white">
                  <i className="xwing-miniatures-font xwing-miniatures-font-turnleft"></i>
                </td>
                <td className="bankleft white">
                  <i className="xwing-miniatures-font xwing-miniatures-font-bankleft"></i>
                </td>
                <td className="straight green">
                  <i className="xwing-miniatures-font xwing-miniatures-font-straight"></i>
                </td>
                <td className="bankright white">
                  <i className="xwing-miniatures-font xwing-miniatures-font-bankright"></i>
                </td>
                <td className="turnright white">
                  <i className="xwing-miniatures-font xwing-miniatures-font-turnright"></i>
                </td>
                <td></td>
              </tr>
              <tr>
                <th className="speed">2</th>
                <td className="turnleft white">
                  <i className="xwing-miniatures-font xwing-miniatures-font-turnleft"></i>
                </td>
                <td className="bankleft white">
                  <i className="xwing-miniatures-font xwing-miniatures-font-bankleft"></i>
                </td>
                <td className="straight green">
                  <i className="xwing-miniatures-font xwing-miniatures-font-straight"></i>
                </td>
                <td className="bankright white">
                  <i className="xwing-miniatures-font xwing-miniatures-font-bankright"></i>
                </td>
                <td className="turnright white">
                  <i className="xwing-miniatures-font xwing-miniatures-font-turnright"></i>
                </td>
                <td></td>
              </tr>
              <tr>
                <th className="speed">1</th>
                <td></td>
                <td className="bankleft green">
                  <i className="xwing-miniatures-font xwing-miniatures-font-bankleft"></i>
                </td>
                <td></td>
                <td className="bankright green">
                  <i className="xwing-miniatures-font xwing-miniatures-font-bankright"></i>
                </td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </div>


    <div className="squad-item-container clearfix">
      <div className="squad-item-ship galactic-empire">

        <div className="pilot-container">
          <div className="ship-type-icon">
            <i className="xwing-miniatures-ship xwing-miniatures-ship-tieadvanced"></i>
          </div>
          <div className="pilot-skill">
            <Tooltip content="Pilot skill: 11" styles={xwtt}>11</Tooltip>
          </div>
          <div className="pilot-tier tier-2">
            <Tooltip content="Pilot tier: 2" styles={xwtt}>
              <img alt="Tier 2" src={require('./img/tier-2.svg')} />
            </Tooltip>
          </div>
        </div>

        <div className="points-container">
          <Tooltip content="Ship points: 68" styles={xwtt}>
            <div className="faction">
              <i className="xwing-miniatures-font xwing-miniatures-font-empire"></i>
            </div>
            <div className="points">68</div>
          </Tooltip>
        </div>

        <div className="id-container">
          <div className="ship-type">Tie Advanced x1</div>
          <div className="pilot unique">
            <Tooltip content="During your Perform Action step, you may perform 2 actions." styles={xwtt_lg}>Darth Vader</Tooltip>
          </div>
        </div>

        <div className="ship-container">
          <div className="stats-container">
            <div className="stat attack">
              <Tooltip content="Attack" styles={xwtt}>
                <i className="xwing-miniatures-font xwing-miniatures-font-attack"></i><span>2</span>
              </Tooltip>
            </div>
            <div className="stat agility">
              <Tooltip content="Agility" styles={xwtt}>
                <i className="xwing-miniatures-font xwing-miniatures-font-agility"></i><span>3</span>
              </Tooltip>
            </div>
            <div className="stat hull">
              <Tooltip content="Hull" styles={xwtt}>
                <i className="xwing-miniatures-font xwing-miniatures-font-hull"></i><span>3</span>
              </Tooltip>
            </div>
            <div className="stat shield">
              <Tooltip content="Shields" styles={xwtt}>
                <i className="xwing-miniatures-font xwing-miniatures-font-shield"></i><span>2</span>
              </Tooltip>
            </div>
          </div>
          <div className="action-container">
            <div className="action focus">
              <Tooltip content="Focus" styles={xwtt}>
                <i className="xwing-miniatures-font xwing-miniatures-font-focus"></i>
              </Tooltip>
            </div>
            <div className="action targetlock">
              <Tooltip content="Target lock" styles={xwtt}>
                <i className="xwing-miniatures-font xwing-miniatures-font-targetlock"></i>
              </Tooltip>
            </div>
            <div className="action barrelroll">
              <Tooltip content="Barrel roll" styles={xwtt}>
                <i className="xwing-miniatures-font xwing-miniatures-font-barrelroll"></i>
              </Tooltip>
            </div>
            <div className="action evade">
              <Tooltip content="Evade" styles={xwtt}>
                <i className="xwing-miniatures-font xwing-miniatures-font-evade"></i>
              </Tooltip>
            </div>
            <div className="action boost">
              <Tooltip content="Boost" styles={xwtt}>
                <i className="xwing-miniatures-font xwing-miniatures-font-boost"></i>
              </Tooltip>
            </div>
          </div>
        </div>

        <div className="pilot-ability-container">
          <div className="pilot-ability">During your "Perform Action" step, you may perform 2 actions.</div>
        </div>

        <div className="upgrades-container">
          <div className="upgrade title filled">
            <i className="xwing-miniatures-font xwing-miniatures-font-title"></i>
            <span className="name">TIE/x1 <span className="upgrade-cost">[0]</span></span>
          </div>
          <div className="upgrade modification filled">
            <i className="xwing-miniatures-font xwing-miniatures-font-modification"></i>
            <span className="name">Engine Upgrade <span className="upgrade-cost">[6]</span></span>
          </div>
          <div className="upgrade elite filled">
            <i className="xwing-miniatures-font xwing-miniatures-font-elite"></i>
            <span className="name">Veteran Instincts <span className="upgrade-cost">[2]</span></span>
          </div>
          <div className="upgrade system filled">
            <i className="xwing-miniatures-font xwing-miniatures-font-system"></i>
            <span className="name">Advanced Targeting Computer <span className="upgrade-cost">[4]</span></span>
          </div>
          <div className="upgrade missile empty">
            <i className="xwing-miniatures-font xwing-miniatures-font-missile"></i>
            <span className="name">Missile</span>
          </div>
        </div>

        <div className="manoevers-container">
          <table className="manoevers">
            <tbody>
              <tr>
                <th className="speed">5</th>
                <td></td>
                <td></td>
                <td className="straight white"><i className="xwing-miniatures-font xwing-miniatures-font-straight"></i></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th className="speed">4</th>
                <td></td>
                <td></td>
                <td className="straight white">
                  <i className="xwing-miniatures-font xwing-miniatures-font-straight"></i>
                </td>
                <td></td>
                <td></td>
                <td className="kturn red">
                  <i className="xwing-miniatures-font xwing-miniatures-font-kturn"></i>
                </td>
              </tr>
              <tr>
                <th className="speed">3</th>
                <td className="turnleft white">
                  <i className="xwing-miniatures-font xwing-miniatures-font-turnleft"></i>
                </td>
                <td className="bankleft white">
                  <i className="xwing-miniatures-font xwing-miniatures-font-bankleft"></i>
                </td>
                <td className="straight green">
                  <i className="xwing-miniatures-font xwing-miniatures-font-straight"></i>
                </td>
                <td className="bankright white">
                  <i className="xwing-miniatures-font xwing-miniatures-font-bankright"></i>
                </td>
                <td className="turnright white">
                  <i className="xwing-miniatures-font xwing-miniatures-font-turnright"></i>
                </td>
                <td></td>
              </tr>
              <tr>
                <th className="speed">2</th>
                <td className="turnleft white">
                  <i className="xwing-miniatures-font xwing-miniatures-font-turnleft"></i>
                </td>
                <td className="bankleft white">
                  <i className="xwing-miniatures-font xwing-miniatures-font-bankleft"></i>
                </td>
                <td className="straight green">
                  <i className="xwing-miniatures-font xwing-miniatures-font-straight"></i>
                </td>
                <td className="bankright white">
                  <i className="xwing-miniatures-font xwing-miniatures-font-bankright"></i>
                </td>
                <td className="turnright white">
                  <i className="xwing-miniatures-font xwing-miniatures-font-turnright"></i>
                </td>
                <td></td>
              </tr>
              <tr>
                <th className="speed">1</th>
                <td></td>
                <td className="bankleft green">
                  <i className="xwing-miniatures-font xwing-miniatures-font-bankleft"></i>
                </td>
                <td></td>
                <td className="bankright green">
                  <i className="xwing-miniatures-font xwing-miniatures-font-bankright"></i>
                </td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </div>



    <div className="squad-item-container minified clearfix">
      <div className="squad-item-ship galactic-empire">

        <div className="pilot-container">
          <div className="ship-type-icon">
            <i className="xwing-miniatures-ship xwing-miniatures-ship-tieadvanced"></i>
          </div>
          <div className="pilot-skill">
            <Tooltip content="Pilot skill: 11" styles={xwtt}>11</Tooltip>
          </div>
          <div className="pilot-tier tier-2">
            <Tooltip content="Pilot tier: 2" styles={xwtt}>
              <img alt="Tier 2" src={require('./img/tier-2.svg')} />
            </Tooltip>
          </div>
        </div>

        <div className="points-container">
          <Tooltip content="Ship points: 68" styles={xwtt}>
            <div className="faction">
              <i className="xwing-miniatures-font xwing-miniatures-font-empire"></i>
            </div>
            <div className="points">68</div>
          </Tooltip>
          <MediaQuery query="(min-width: 599px)">
            <div className="upgrades-container">
              <div className="upgrade title filled">
                <Tooltip content="TIE/x1" styles={xwtt}>
                  <i className="xwing-miniatures-font xwing-miniatures-font-title"></i>
                  <span className="name">TIE/x1 <span className="upgrade-cost">[0]</span></span>
                </Tooltip>
              </div>
              <div className="upgrade modification filled">
                <Tooltip content="Engine Upgrade" styles={xwtt}>
                  <i className="xwing-miniatures-font xwing-miniatures-font-modification"></i>
                  <span className="name">Engine Upgrade <span className="upgrade-cost">[6]</span></span>
                </Tooltip>
              </div>
              <div className="upgrade elite filled">
                <Tooltip content="Veteran Instincts" styles={xwtt}>
                  <i className="xwing-miniatures-font xwing-miniatures-font-elite"></i>
                  <span className="name">Veteran Instincts <span className="upgrade-cost">[2]</span></span>
                </Tooltip>
              </div>
              <div className="upgrade system filled">
                <Tooltip content="Advanced Targeting Computer" styles={xwtt}>
                  <i className="xwing-miniatures-font xwing-miniatures-font-system"></i>
                  <span className="name">Advanced Targeting Computer <span className="upgrade-cost">[4]</span></span>
                </Tooltip>
              </div>
              <div className="upgrade missile empty">
                <Tooltip content="Missile" styles={xwtt}>
                  <i className="xwing-miniatures-font xwing-miniatures-font-missile"></i>
                  <span className="name">Missile</span>
                </Tooltip>
              </div>
            </div>
          </MediaQuery>
        </div>

        <div className="id-container">
          <div className="ship-type">Alpha-class Star Wing</div>
          <div className="pilot unique">
            <Tooltip content="During your Perform Action step, you may perform 2 actions." styles={xwtt_lg}>Blackmoon Squadron Pilot</Tooltip>
          </div>
        </div>

        <div className="ship-container">
          <div className="stats-container">
            <div className="stat attack">
              <Tooltip content="Attack" styles={xwtt}>
                <i className="xwing-miniatures-font xwing-miniatures-font-attack"></i><span>2</span>
              </Tooltip>
            </div>
            <div className="stat agility">
              <Tooltip content="Agility" styles={xwtt}>
                <i className="xwing-miniatures-font xwing-miniatures-font-agility"></i><span>3</span>
              </Tooltip>
            </div>
            <div className="stat hull">
              <Tooltip content="Hull" styles={xwtt}>
                <i className="xwing-miniatures-font xwing-miniatures-font-hull"></i><span>3</span>
              </Tooltip>
            </div>
            <div className="stat shield">
              <Tooltip content="Shields" styles={xwtt}>
                <i className="xwing-miniatures-font xwing-miniatures-font-shield"></i><span>2</span>
              </Tooltip>
            </div>
          </div>
          <div className="action-container">
            <div className="action focus">
              <Tooltip content="Focus" styles={xwtt}>
                <i className="xwing-miniatures-font xwing-miniatures-font-focus"></i>
              </Tooltip>
            </div>
            <div className="action targetlock">
              <Tooltip content="Target lock" styles={xwtt}>
                <i className="xwing-miniatures-font xwing-miniatures-font-targetlock"></i>
              </Tooltip>
            </div>
            <div className="action barrelroll">
              <Tooltip content="Barrel roll" styles={xwtt}>
                <i className="xwing-miniatures-font xwing-miniatures-font-barrelroll"></i>
              </Tooltip>
            </div>
            <div className="action evade">
              <Tooltip content="Evade" styles={xwtt}>
                <i className="xwing-miniatures-font xwing-miniatures-font-evade"></i>
              </Tooltip>
            </div>
          </div>
        </div>

        <div className="ship-container">
          <MediaQuery query="(max-width: 600px)">
            <div className="upgrades-container">
              <div className="upgrade title filled">
                <Tooltip content="TIE/x1" styles={xwtt}>
                  <i className="xwing-miniatures-font xwing-miniatures-font-title"></i>
                  <span className="name">TIE/x1 <span className="upgrade-cost">[0]</span></span>
                </Tooltip>
              </div>
              <div className="upgrade modification filled">
                <Tooltip content="Engine Upgrade" styles={xwtt}>
                  <i className="xwing-miniatures-font xwing-miniatures-font-modification"></i>
                  <span className="name">Engine Upgrade <span className="upgrade-cost">[6]</span></span>
                </Tooltip>
              </div>
              <div className="upgrade elite filled">
                <Tooltip content="Veteran Instincts" styles={xwtt}>
                  <i className="xwing-miniatures-font xwing-miniatures-font-elite"></i>
                  <span className="name">Veteran Instincts <span className="upgrade-cost">[2]</span></span>
                </Tooltip>
              </div>
              <div className="upgrade system filled">
                <Tooltip content="Advanced Targeting Computer" styles={xwtt}>
                  <i className="xwing-miniatures-font xwing-miniatures-font-system"></i>
                  <span className="name">Advanced Targeting Computer <span className="upgrade-cost">[4]</span></span>
                </Tooltip>
              </div>
              <div className="upgrade missile empty">
                <Tooltip content="Missile" styles={xwtt}>
                  <i className="xwing-miniatures-font xwing-miniatures-font-missile"></i>
                  <span className="name">Missile</span>
                </Tooltip>
              </div>
            </div>
          </MediaQuery>

        </div>

      </div>
    </div>


    <div><img alt="template" src={require('./img/squad_layouts.png')} /></div>

  </div>

);

render(<App />, document.getElementById('root'));
