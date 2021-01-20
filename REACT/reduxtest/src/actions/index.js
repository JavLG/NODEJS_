
export function moviesList(){
  return {
    type:'MOVIES_LIST',
    payload:[
      {id:1, name:'Pulp Fiction'},
      {id:2, name:'Pacific Rim'},
      {id:3, name:'Rambo'}
    ]
  }
}


export function directorsList(){
  return {
    type:'DIR_LIST',
    payload:[
      {id:1, name:'Tarantino'},
      {id:2, name:'Scorsese'},
      {id:3, name:'Burton'}
    ]
  }
}