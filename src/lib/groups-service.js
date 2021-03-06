import axios from "axios";

class Groups {
  constructor() {
    this.group = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}/groups`,
      withCredentials: true
    });
  }

  create(newGroup){
      return this.group
      .post('/create', newGroup)
      .then(({ data }) => data);
  }

  join(groupid) {
    return this.group
    .put('/join', groupid)
    .then(({data})=> data)
  }

  getAllGroups(){
    return this.group
    .get('/')
    .then(({data})=> data)
  }

  getOneGroup(id){
    return this.group
    .get(`/${id}`)
    .then(({data}) => data)
  }

  leaveGroup(groupid){
    return this.group
    .put(`/leave/${groupid}`)
    .then(({data}) => data)
  }

  deleteGroup(groupid){
    return this.group
    .delete(`/delete/${groupid}`)
    .then(({data}) => data)
  }
}

const groupsService = new Groups();
// `groupsService` is the object with the above axios request methods

export default groupsService;