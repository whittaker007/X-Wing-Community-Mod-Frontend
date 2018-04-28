import React from 'react';
import { render } from 'react-dom';

import '../node_modules/bootstrap/dist/css/bootstrap-reboot.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap-grid.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import '../node_modules/xwing-miniatures-font/dist/xwing-miniatures.css';

import './css/csb.css';

const App = () => (
  <div className="squad-container">

    <div className="squad-item-container">
      <div className="squad-item-ship galactic-empire">

        <div className="pilot-container">
          <div className="pilot-skill">11</div>
          <div className="pilot-tier tier-2"><img alt="Tier 2" src={require('./img/tier-2.svg')} /></div>
          <div className="pilot-name unique">Darth Vader</div>

          <div className="pilot-ability-container">
            <div className="pilot-ability">During your "Perform Action" step, you may perform 2 actions.</div>
          </div>
        </div>

        <div className="ship-container">

          <div className="points-container">
            <div className="faction">
              <i className="xwing-miniatures-font xwing-miniatures-font-empire"></i>
            </div>
            <div className="points">68</div>
          </div>

          <div className="ship-type">Tie Advanced x1</div>
          <div className="ship-type-icon">
            <i className="xwing-miniatures-ship xwing-miniatures-ship-tieadvanced"></i>
          </div>

          <div className="upgrades-container">
            <div className="upgrade title filled">
              <i className="xwing-miniatures-font xwing-miniatures-font-title"></i>
              <span className="upgrade-name unique">TIE/x1 <span className="upgrade-cost">[0]</span></span>
            </div>
            <div className="upgrade modification filled">
              <i className="xwing-miniatures-font xwing-miniatures-font-modification"></i>
              <span className="upgrade-name">Engine Upgrade <span className="upgrade-cost">[6]</span></span>
            </div>
            <div className="upgrade elite filled">
              <i className="xwing-miniatures-font xwing-miniatures-font-elite"></i>
              <span className="upgrade-name">Veteran Instincts <span className="upgrade-cost">[2]</span></span>
            </div>
            <div className="upgrade system filled">
              <i className="xwing-miniatures-font xwing-miniatures-font-system"></i>
              <span className="upgrade-name">Advanced Targeting Computer <span className="upgrade-cost">[4]</span></span>
            </div>
            <div className="upgrade missile empty">
              <i className="xwing-miniatures-font xwing-miniatures-font-missile"></i>
              <span className="upgrade-name">Missile</span>
            </div>
          </div>

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
            <div className="action boost">
              <i className="xwing-miniatures-font xwing-miniatures-font-boost"></i>
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

    </div>

    <div><img alt="template" src={require('./img/squad_layouts.png')} /></div>

  </div>

);

render(<App />, document.getElementById('root'));
