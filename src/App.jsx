import { useState, useRef } from 'react'
import './App.css'
import HighchartsReact from 'highcharts-react-official'
import Highcharts from 'highcharts'
import HighStock from "highcharts/highstock"
import more from "highcharts/highcharts-more"
import draggable from "highcharts/modules/draggable-points"

if (typeof HighStock === "object") {
    more(HighStock);
    draggable(HighStock);
}

function App() {
    const gdpRef = useRef()
    const unEmRef = useRef()

    let unEmploymentInitialValue = [
            [1564531200000, 5.6333],
            [1572480000000, 5.7],
            [1580428800000, 6.3],
            [1588204800000, 13.0],
            [1596153600000, 10.0333],
            [1604102400000, 8.7],
            [1612051200000, 8.3],
            [1619740800000, 7.7],
            [1627689600000, 7.4],
            [1635638400000, 7.0],
            [1643587200000, 6.9],
            [1651276800000, 6.8],
            [1659225600000, 6.7],
            [1667174400000, 6.6],
            [1675123200000, 6.5],
            [1682812800000, 6.4],
            [1690761600000, 6.3],
            [1698710400000, 6.2],
            [1706659200000, 6.1],
            [1714435200000, 6.0],
            [1722384000000, 6.0],
            [1730332800000, 6.0],
            [1738281600000, 6.0],
            [1745971200000, 6.0],
            [1753920000000, 6.0]
        ]
    let gdpInitialValue = [
        [1564531200000, 2098.547],
        [1572480000000, 2101.48],
        [1580428800000, 2057.186],
        [1588204800000, 1820.369],
        [1596153600000, 1997.5674],
        [1604102400000, 2002.5427],
        [1612051200000, 2017.3957],
        [1619740800000, 2042.1536],
        [1627689600000, 2069.672],
        [1635638400000, 2097.5612],
        [1643587200000, 2108.4591],
        [1651276800000, 2122.3203],
        [1659225600000, 2138.7479],
        [1667174400000, 2157.0931],
        [1675123200000, 2176.5172],
        [1682812800000, 2196.0718],
        [1690761600000, 2214.7916],
        [1698710400000, 2231.7891],
        [1706659200000, 2246.3423],
        [1714435200000, 2257.9675],
        [1722384000000, 2268.0605],
        [1730332800000, 2278.1986],
        [1738281600000, 2288.382],
        [1745971200000, 2298.611],
        [1753920000000, 2308.8856]
    ]
    let pGDP = [
        [1564531200000, 2085.253159446166],
        [1572480000000, 2094.5741160437474],
        [1580428800000, 2103.9367367584655],
        [1588204800000, 2111.7825039699587],
        [1596153600000, 2119.6575287451715],
        [1604102400000, 2127.561920188161],
        [1612051200000, 2135.4957878098426],
        [1619740800000, 2143.459241529508],
        [1627689600000, 2151.452391676349],
        [1635638400000, 2159.475348990983],
        [1643587200000, 2169.128074325704],
        [1651276800000, 2178.823946763924],
        [1659225600000, 2188.5631591706097],
        [1667174400000, 2198.345905272821],
        [1675123200000, 2208.1723796635665],
        [1682812800000, 2218.0427778056746],
        [1690761600000, 2227.9572960356804],
        [1698710400000, 2237.9161315677316],
        [1706659200000, 2247.9194824975107],
        [1714435200000, 2257.9675478061768],
        [1722384000000, 2268.0605273643228],
        [1730332800000, 2278.1986219359505],
        [1738281600000, 2288.382033182466],
        [1745971200000, 2298.610963666688],
        [1753920000000, 2308.8856168568805]
    ]
    let OG = [
        [1564531200000, 0.6375168642528184],
        [1572480000000, 0.3297034897622231],
        [1580428800000, -2.2220600050215533],
        [1588204800000, -13.799408955331716],
        [1596153600000, -5.759901010795532],
        [1604102400000, -5.876175259315042],
        [1612051200000, -5.530337867263202],
        [1619740800000, -4.726268246311626],
        [1627689600000, -3.801172076330206],
        [1635638400000, -2.867093336778326],
        [1643587200000, -2.7969305676080913],
        [1651276800000, -2.593310284605854],
        [1659225600000, -2.2761642573036034],
        [1667174400000, -1.8765369508565999],
        [1675123200000, -1.4335466677477204],
        [1682812800000, -0.9905563858774391],
        [1690761600000, -0.5909290788549959],
        [1698710400000, -0.2737830513073414],
        [1706659200000, -0.07016276765720031],
        [1714435200000, 8.676392937445598e-10],
        [1722384000000, 0.0],
        [1730332800000, 0.0],
        [1738281600000, 0.0],
        [1745971200000, 0.0],
        [1753920000000, 0.0]
    ]

    const [gdp, setGDP] = useState(gdpInitialValue)
    const [unemployment, setUnemployment] = useState(unEmploymentInitialValue)

    // TODO: Refactor below function
    const getPGDP = function (time) {
        return pGDP.filter(function(item){
            return item[0] === time
        })
    }

    // TODO: I am not sure I need this function
    const getOG = function (time) {
        return OG.filter(function(item){
            return item[0] === time
        })
    }

    // TODO: Not using this function
    const getUnEmployment = function (time) {
        return unEmploymentInitialValue.filter(function(item){
            return item[0] === time
        })
    }

    const getItemAtPreviousIndex = function(arr, time) {
        for(let i=0; i<arr.length; i++){
            if(time === arr[i][0] || time === arr[i].x) return arr[i-1][0]
        }
    }

    const getItemAtIndex = function(arr, time) {
        for(let i=0; i<arr.length; i++){
            if(time === arr[i][0]) return arr[i]
        }
    }

    let GDPOptions = {
        rangeSelector: {
            selected: 'All'
        },

        title: {
            text: "GDP"
        },

        plotOptions: {
            series: {
                point: {
                    events: {
                        drag: function (e){

                            let pgdp = getItemAtIndex(pGDP, e.target.options.x)
                            let OG = 100 * (e.target.options.y/pgdp[1] - 1)

                            // TODO: refactor below variable
                            let cUnEmploy = getItemAtIndex(unemployment, e.target.options.x)

                            let timeAtPreviousIndex = getItemAtPreviousIndex(unemployment, e.target.options.x)

                            let pOG = getOG(timeAtPreviousIndex)
                            let pUnEmploy = getItemAtIndex(unemployment, timeAtPreviousIndex)

                            let deltaOG = OG - pOG[0][1]

                            let nUnEmploy = pUnEmploy[1] - .5 * deltaOG

                            let tmpArray = JSON.parse(JSON.stringify(unemployment))
                            tmpArray.find(function(unemploy, index){
                                if(unemploy[0] === e.target.options.x) {
                                    unemploy[1] = nUnEmploy
                                    setUnemployment(tmpArray)
                                }
                            })
                        },
                    }
                }
            },
        },

        series: [
            {
                dragDrop: {
                    draggableY: true
                },
                data: gdp,
            }
        ]
    };
    let UROptions = {
        rangeSelector: {
            selected: 'All'
        },
        title: {
            text: "Unemployment Rate"
        },

        plotOptions: {
            series: {
                dragDrop: {

                },
                point: {
                    events: {
                        dragStart: function (e){
                        },
                        drag: function (e){

                            let prevUnEmployTime = getItemAtPreviousIndex(unemployment, e.target.options.x)
                            let prevUnEmploy = getItemAtIndex(unemployment, prevUnEmployTime)
                            let curUnEmploy = e.target.options.y


                            let prevTime = getItemAtPreviousIndex(OG, e.target.options.x)
                            let prevOG = getOG(prevTime)
                            let curOG = prevOG[0][1] + 2 * (prevUnEmploy[1] - curUnEmploy)

                            let curPGDP = getItemAtIndex(pGDP, e.target.options.x)

                            let GDP = curPGDP[1] * (curOG/100 + 1)

                            let tmpArray = JSON.parse(JSON.stringify(gdp))
                            tmpArray.find(function(g, index){
                                if(g[0] === e.target.options.x) {
                                    g[1] = GDP
                                    setGDP(tmpArray)
                                }
                            })
                        },
                        drop: function(e){
                        }
                    }
                }
            },
        },

        series: [
            {
                dragDrop: {
                    draggableY: true
                },
                data: unemployment
            }
        ]
    };
  return (
    <div className="App">
      <p className="read-the-docs">
        ATLAS Project: Proof of Concept
      </p>
      <div className="atlas-horizontal">
          <div>
              <HighchartsReact
                  highcharts={HighStock}
                  constructorType={"stockChart"}
                  options={GDPOptions}
                  ref={gdpRef}
              />
          </div>
          <div>
              <HighchartsReact
                  highcharts={HighStock}
                  constructorType={"stockChart"}
                  options={UROptions}
                  ref={unEmRef}
              />
          </div>
      </div>
    </div>
  )
}

export default App
