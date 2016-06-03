import React from 'react';
import img from '../assets/pinewoodraceday.png';
import pinewoodImg from '../assets/pinewood.jpg';


const Welcome = () => {
  return (
    <div>
      <div className="row pageContentHeight">
        <div className="col-sm-6">
          <h3 className="text-center">Welcome</h3>

          <p>Welcome to PinewoodRaceDay.com, no download, no installation, <b>no cost</b>, solution for pinewood derby races and raingutter regattas. Perfect for use in Boy Scouts, Cub Scouts, BSA, Awana, and Youth groups.</p>

          <p className="text-danger">This application works with both <b>elapsed-time</b> and <b>point</b> methods of scoring.</p>

          <p>Our Cub Scout pack is blessed to have a nice aluminum four lane track with precision timers. Unfortunately, the software was problematic and had disappeared years ago. We persevered using spreadsheets at best, pen and paper at worst, until now.</p>

          <h3 className="text-center">The Roster</h3>

          <p>To begin, click the roster tab above to begin entering den or group names. Then just select one group at a time to assign names to.</p>

          <h3 className="text-center">The Race</h3>

          <p>The first thing that must be decided is the appropriate <strong>scoring method</strong> and the <strong>number of lanes</strong>. The most accurate method is the elapsed-time method, if a track with a precision timing system is available. This method is enabled by default.</p>

          <p>If a suitable track is not available, or this is a raingutter regatta race, then the points system should be used. To enable this, click the preferences tab above and check the points box. This will allow simple numbers to be entered for each heat with scoring as follows:</p>

          <table className="table table-bordered scoreExample">
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

          <p>The number of lanes can be set as two, four, or six. Four lanes is enabled by default, but can be adjusted to accommodate your individual track size or number of raingutter regatta lanes.</p>

          <p className="text-danger">It is important to note that switching to or from a points system, or between the number of lanes, will delete any scores that have been previously awarded.</p>

        </div>
        <div className="col-sm-6">
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
      </div>
      <hr/>
      <div className="row">
        <div className="col-sm-6">
          <h3 className="text-center">Entering Scores</h3>

          <p>Once inside the race tab, you will be able to select which den or group is up to race. The race form has an input for each heat and a button to submit the racer's results. Just move down through the list of names as described in the sections above. Once a racer has completed all four heats, there is an option to hide them from the race list. This is  especially helpful when dealing with large groups. If you need to bring them back to the list, simply click on the show checkbox in the results list below. The results will be sorted by "fastest" racer as results are entered.</p>

          <h3 className="text-center">Ties</h3>

          <p>The elapsed-time method should eliminate any ties. In the rare case that this does occur, the averages can be compared. Ties are very common using the points method. In this case, simply move down the list the desired number of places or those with the matching scores. The best way to keep these results separate, is to create a new group, appending final or some other description, add the racers names, and race.</p>

          <h3 className="text-center" >Results</h3>

          <p>The results tab displays all of the results for all dens or groups sorted by "fastest". To print or save the results as a PDF, simply click the print button and the browsers native print dialog will open allowing you to chose your desired format.</p>

        </div>
        <div className="col-sm-6">

          <h3 className="text-center">Feedback</h3>

          <p>I hope you enjoyed using PinewoodRaceDay. If you have any suggestions or praises, I would love to hear it. You can reach me on twitter <a href="https://twitter.com/brandonlehr" target="_blank">@brandonlehr</a> and by email <a href="mailto:blehr.mail@gmail.com" target="_blank">blehr.mail@gmail.com</a></p>

          <h2 className="text-center headerFont" >PinewoodRaceDay</h2>

          <img className="img-responsive" src={pinewoodImg} />
        </div>
      </div>
    </div>
  );
};

export default Welcome;
