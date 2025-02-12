import  apiBasename  from '../../config'

export const get_people = () => {
    return get( apiBasename+"/person");
}
export const get_situations= (id) => {
    return get(apiBasename+"/person/"+id+"/situation");
}
export const get_violences= () => {
    return get(apiBasename+"/violence");
}
export const get_actions=(id) => {
    return get(apiBasename+"/situation/"+id+"/action");
}
export function get (url){
    return fetch(url).then(apiResultat => {
        return apiResultat.json();
    })
}
