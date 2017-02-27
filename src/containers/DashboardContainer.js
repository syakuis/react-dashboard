import React from 'react';
import Dragula from 'react-dragula';
import 'react-dragula/dist/dragula.css';

import './css/style.css';

class DashboardContainer extends React.Component {

  render() {
    return (
      <div ref={this.dragulaDecorator} className="row dashboard">
        <div className="col-xs-1 portlet">
          d0
          <div className="resizable-handle" />
        </div>
        <div className="col-xs-1 portlet">d1</div>
        <div className="col-xs-1 portlet">d2</div>
        <div className="col-xs-1 portlet">d3</div>
        <div className="col-xs-1 portlet">d4</div>
        <div className="col-xs-1 portlet">d5</div>
        <div className="col-xs-1 portlet">d6</div>
        <div className="col-xs-1 portlet">d7</div>
        <div className="col-xs-1 portlet">d8</div>
        <div className="col-xs-1 portlet">d9</div>
        <div className="col-xs-1 portlet">d10</div>
        <div className="col-xs-1 portlet">d11</div>
        <div className="col-xs-1 portlet">d12</div>
        <div className="col-xs-1 portlet">d13</div>
        <div className="col-xs-1 portlet">d14</div>
        <div className="col-xs-1 portlet">d15</div>
        <div className="col-xs-1 portlet">d16</div>
        <div className="col-xs-1 portlet">d1</div>
        <div className="col-xs-1 portlet">d2</div>
        <div className="col-xs-1 portlet">d3</div>
        <div className="col-xs-1 portlet">d4</div>
        <div className="col-xs-1 portlet">d5</div>
        <div className="col-xs-1 portlet">d6</div>
        <div className="col-xs-1 portlet">d7</div>
        <div className="col-xs-1 portlet">d8</div>
        <div className="col-xs-1 portlet">d9</div>
        <div className="col-xs-1 portlet">d10</div>
        <div className="col-xs-1 portlet">d11</div>
        <div className="col-xs-1 portlet">d12</div>
        <div className="col-xs-1 portlet">d13</div>
        <div className="col-xs-1 portlet">d14</div>
        <div className="col-xs-1 portlet">d15</div>
        <div className="col-xs-1 portlet">d16</div>
        <div className="col-xs-1 portlet">d1</div>
        <div className="col-xs-1 portlet">d2</div>
        <div className="col-xs-1 portlet">d3</div>
        <div className="col-xs-1 portlet">d4</div>
        <div className="col-xs-1 portlet">d5</div>
        <div className="col-xs-1 portlet">d6</div>
        <div className="col-xs-1 portlet">d7</div>
        <div className="col-xs-1 portlet">d8</div>
        <div className="col-xs-1 portlet">d9</div>
        <div className="col-xs-1 portlet">d10</div>
        <div className="col-xs-1 portlet">d11</div>
        <div className="col-xs-1 portlet">d12</div>
        <div className="col-xs-1 portlet">d13</div>
        <div className="col-xs-1 portlet">d14</div>
        <div className="col-xs-1 portlet">d15</div>
        <div className="col-xs-1 portlet">d16</div>
        <div className="col-xs-1 portlet">d1</div>
        <div className="col-xs-1 portlet">d2</div>
        <div className="col-xs-1 portlet">d3</div>
        <div className="col-xs-1 portlet">d4</div>
        <div className="col-xs-1 portlet">d5</div>
        <div className="col-xs-1 portlet">d6</div>
        <div className="col-xs-1 portlet">d7</div>
        <div className="col-xs-1 portlet">d8</div>
        <div className="col-xs-1 portlet">d9</div>
        <div className="col-xs-1 portlet">d10</div>
        <div className="col-xs-1 portlet">d11</div>
        <div className="col-xs-1 portlet">d12</div>
        <div className="col-xs-1 portlet">d13</div>
        <div className="col-xs-1 portlet">d14</div>
        <div className="col-xs-1 portlet">d15</div>
        <div className="col-xs-1 portlet">d16</div>
        <div className="col-xs-1 portlet">d1</div>
        <div className="col-xs-1 portlet">d2</div>
        <div className="col-xs-1 portlet">d3</div>
        <div className="col-xs-1 portlet">d4</div>
        <div className="col-xs-1 portlet">d5</div>
        <div className="col-xs-1 portlet">d6</div>
        <div className="col-xs-1 portlet">d7</div>
        <div className="col-xs-1 portlet">d8</div>
        <div className="col-xs-1 portlet">d9</div>
        <div className="col-xs-1 portlet">d10</div>
        <div className="col-xs-1 portlet">d11</div>
        <div className="col-xs-1 portlet">d12</div>
        <div className="col-xs-1 portlet">d13</div>
        <div className="col-xs-1 portlet">d14</div>
        <div className="col-xs-1 portlet">d15</div>
        <div className="col-xs-1 portlet">d16</div>
      </div>
    );
  }

  dragulaDecorator(componentBackingInstance) {
    if (componentBackingInstance) {
      Dragula([componentBackingInstance], {});
    }
  }
}

export default DashboardContainer;
