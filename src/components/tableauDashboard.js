import React, { useRef, useEffect } from 'react';

const { tableau } = window;

let viz;


function TableauDashboard() {
  const ref = useRef(null);
  var url = "https://public.tableau.com/views/Second_Milestone_ITP_Ideon/Dashboard2" ;

  const options = {
    device: "desktop"
  }

  function initViz() {
    if(viz){
      viz.dispose();
      viz = new tableau.Viz(ref.current, url, options)
    }else{
      viz = new tableau.Viz(ref.current, url)
      viz.dispose();
    }
  }

  useEffect(() => {
    initViz();
  },[])

  return (<div>
                  <div ref={ref}></div>
          </div>
         )

}



export default TableauDashboard;