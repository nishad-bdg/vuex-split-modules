var students = [
    {
        'id':1,
        'name': 'IronMan',
        'games':['Tennis','Football','Cricket'],
        'selected':false
    },
    {
        'id':2,
        'name': 'Hulk',
        'games':['Tennis','Busket Ball','Cricket'],
        'selected':false
    },
    {
        'id':3,
        'name': 'Thor',
        'games':['Badminton','Football','Cricket'],
        'selected':false
    },
    {
        'id':4,
        'name': 'Spider Man',
        'games':['Tenis','Football','Cricket'],
        'selected':false
    },
    {
        'id':5,
        'name': 'Black Panther',
        'games':['Badminton','Football','Cricket'],
        'selected':false
    },
    {
        'id':6,
        'name': 'Super Man',
        'games':['Badminton','Football','Swimmer'],
        'selected':false
    }
]

export default{
    getStudents(){
        return students;
    }
}