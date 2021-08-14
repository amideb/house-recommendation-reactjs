import logo from './logo.svg';
import './App.css';
import ReactInputMatrix from 'react-input-matrix'
import { useState } from "react";


function App() {

  const [value, setValue]= useState()
  const [ans, setAns]= useState("")

  let House =[]
  let Gym=[]
  let Hospital=[]
  let Restaurant=[]
  let bestHouse= "Checking"

  function fetchData(){
     //console.log(value[0][0].value)
     console.log(value)
     for(let i=0; i<value.length; i++){
       for(let j=0; j<value[i].length; j++){
         for(let k=1; k<=value[i].length; k++){
          if(value[i][j].value==`House${k}`){
       //     console.log("Done " + i+ ' '+ j)
            House[k] ={
              name:`House${k}`,
              i_axis:i,
              j_axis:j,
              hospital: 0,
              gym:0,
              restaurant:0,
              point:0
            };
            console.log(House[k])
            continue;
          }else if(value[i][j].value==`Gym${k}`){
            Gym[k]={
              name:`Gym${k}`,
              x_axis: i,
              y_axis:j
            }
            console.log(Gym[k])
            continue;
          }
          else if(value[i][j].value==`Hospital${k}`){
            Hospital[k]={
              name:`Hospital${k}`,
              x_axis: i,
              y_axis:j
            }
            console.log(Hospital[k])
            continue;
          }
          else if(value[i][j].value==`Restaurant${k}`){
            Restaurant[k]={
              name:`Restaurant${k}`,
              x_axis: i,
              y_axis:j
            }
            console.log(Restaurant[k])
            continue;
          }
          
         }
         
       }

     }
     

     returnMinGym()
     returnMinHospital()
     returnMinRestaurant()
     setPoint()
     getBestHouse()
     //console.log(distance(House[1].i_axis,House[1].j_axis,4,3))
     
  }

  function distance(x1, y1, x2,  y2)
{
    // Calculating distance
    return Math.sqrt(Math.pow(x2 - x1, 2) +
                Math.pow(y2 - y1, 2) * 1.0);
}

  function returnMinGym(){

    

    for(let a= 1; a<House.length; a++){
      var ans= Number.MAX_SAFE_INTEGER + 500
        console.log(ans)
      for(let b=1; b<Gym.length; b++){
        
        let dis = distance(House[a].i_axis, House[a].j_axis, Gym[b].x_axis,  Gym[b].y_axis )
        console.log(dis)
        if(ans>dis){
          ans=dis;
          House[a].gym=ans;
          continue;
        }
        console.log(House[a])
        continue
      }
    } 

  }

  function returnMinHospital(){
    
    for(let h1= 1; h1<House.length; h1++){
      var ans= Number.MAX_SAFE_INTEGER + 500
        console.log(ans)
      for(let h2=1; h2<Hospital.length; h2++){
        
        let dis = distance(House[h1].i_axis, House[h1].j_axis, Hospital[h2].x_axis,  Hospital[h2].y_axis )
        console.log(dis)
        if(ans>dis){
          ans=dis;
          House[h1].hospital=ans;
          continue;
        }
        console.log(House[h1])
        continue
      }
    } 
  }

  function returnMinRestaurant(){
    
    for(let h3= 1; h3<House.length; h3++){
      var ans= Number.MAX_SAFE_INTEGER + 500
        console.log(ans)
      for(let r1=1; r1<Restaurant.length; r1++){
        
        let dis = distance(House[h3].i_axis, House[h3].j_axis, Restaurant[r1].x_axis,  Restaurant[r1].y_axis )
        console.log(dis)
        if(ans>dis){
          ans=dis;
          House[h3].restaurant=ans;
          continue;
        }
        console.log(House[h3])
        continue
      }
    } 
  }

  function setPoint(){
    for(let h5=1; h5<House.length; h5++){
      let val= (House[h5].gym +House[h5].hospital + House[h5].restaurant)/3;
      House[h5].point = val;
      continue;
    }
  }

  function getBestHouse(){

    let ans1= Number.MAX_SAFE_INTEGER + 500
    for(let h6=1; h6<House.length; h6++){
      
        console.log(ans1)
        
      if(ans1>House[h6].point ){
        ans1=House[h6].point
        console.log(ans1)
        setAns(House[h6].name)
        console.log(ans)
        console.log(House)
         continue;
      }
    }

  }




  return (
    <div className="App">
      <header className="App-header">
        <h1>House Recommendation System</h1>
        <p1>Please put a valid data and Mention the serial number also with your data
          Ex. House1, House2 ....
          Accepted keywords:
          House
          Jym
          Hospital
        </p1>
        <h1></h1>
        <ReactInputMatrix onMatrixChange={(data) => setValue(data)} />

        <h1></h1>
        <button style={{width: '200px', height: '40px',margin: '15px', fontSize:15}} onClick={fetchData}>
          Recommend Me
        </button>

        <p1>{ans}</p1>
      </header>

      
    </div>
  );
}

export default App;
