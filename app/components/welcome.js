import React from 'react';
import { pageContentHeight } from '../style/style.css';
import img from '../assets/pinewoodraceday.png';
import style from '../style/style.css';


const Welcome = () => {
  return (
    <div className={`row ${pageContentHeight}`}>
      <div className="col-sm-6">
        <h3 className="text-center">Welcome to PinewoodRaceDay.com</h3>
        <p>Our pack is blessed to have a nice aluminum four lane track with precision timers. Unfortunately, the software was problematic and had disappeared years ago. We persevered using spreadsheets at best, pen and paper at worst, until now.</p>

        <p>Welcome to PinewoodRaceDay.com, a web accessible, no download, no installation, <b>no cost</b>, solution for pinewood derbies and raingutter regattas.</p>

        <p>This application works with both <b>elapsed-time</b> and <b>point</b> methods of scoring.</p>

        <h3 className="text-center">Filling the Roster</h3>

        <p>To begin, click the roster tab above to begin entering den or group names. Then just select one group at a time to assign names to.</p>

        <h3 className="text-center">The Race</h3>

        <p>The first thing that must be decided is the appropriate scoring method. The most accurate method is the elapsed-time method, if a track with a precision timing system is available. This method is enabled by default.</p>

        <p>If a suitable track is not available, or this is a raingutter regatta race, then the points system should be used. To enable this, click the preferences tab above and check the points box. This will allow simple numbers to be entered for each heat with scoring as follows:</p>

        <table className={`table table-bordered ${style.scoreExample}`}>
          <thead>
            <tr>
              <th>Place</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>1</td>
            </tr>
            <tr>
              <td>2</td>
              <td>2</td>
            </tr>
            <tr>
              <td>3</td>
              <td>3</td>
            </tr>
            <tr>
              <td>4</td>
              <td>4</td>
            </tr>
          </tbody>
        </table>

        <p>Using this method, the heats will be totaled and the "fastest" racer will be the one with the lowest score.</p>

        <p className="text-danger">It is important to note that switching to or from a points system will delete any scores that have been previously awarded.</p>

        <h3 className="text-center">Lane Rotation</h3>

        <p>As nice as our track is, we still like to give each racer an opportunity to compete in each lane. This stops complaints of one lane being "faster" than another. Below is a graphic and a table demonstrating this approach. Racers progress in a line from one end of the track to the other with the first three racers going to the back of the line till the first racer finishes in lane two.</p>

        <div><img className="img-responsive" src={img} /></div>
        <table className="table table-bordered table-hover text-center">
          <caption>Typical lane rotation for a six car race.</caption>
          <thead>
            <tr>
              <th className="text-center">Heat #</th>
              <th className="text-center">Lane 4</th>
              <th className="text-center">Lane 3</th>
              <th className="text-center">Lane 2</th>
              <th className="text-center">Lane 1</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><b>1</b></td>
              <td>4</td>
              <td>3</td>
              <td>2</td>
              <td>1</td>
            </tr>
            <tr>
              <td><b>2</b></td>
              <td>5</td>
              <td>4</td>
              <td>3</td>
              <td>2</td>
            </tr>
            <tr>
              <td><b>3</b></td>
              <td>6</td>
              <td>5</td>
              <td>4</td>
              <td>3</td>
            </tr>
            <tr>
              <td><b>4</b></td>
              <td>1</td>
              <td>6</td>
              <td>5</td>
              <td>4</td>
            </tr>
            <tr>
              <td><b>5</b></td>
              <td>2</td>
              <td>1</td>
              <td>6</td>
              <td>5</td>
            </tr>
            <tr>
              <td><b>6</b></td>
              <td>3</td>
              <td>2</td>
              <td>1</td>
              <td>6</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="col-sm-6"></div>
    </div>
  );
};

export default Welcome;
