// // let lecture = 10;
// // let section = 3;
// // let title = 'Javascript';

// // const course = {
// //     lecture: 10,
// //     section : 3,
// //     titlec: 'Javascript',
// //     notes : {
// //         introduction : "Welcome to JS course"
// //     },
// //     enroll () {
// //         console.log("You are sucessfully enrolled");
// //     }   
// // }

// // course.enroll()
// // console.log(course)
 
// // course.price = 999

// // FACTORY FUNCTION

// function creatCourse() {
//     const course = {
//         lecture: 10,
//         section : 3,
//         titlec: 'Javascript',
//         notes : {
//             introduction : "Welcome to JS course"
//         },
//         enroll () {
//             console.log("You are sucessfully enrolled");
//         }   
//     }
//     return course;
// }

// const course = creatCourse();

// course.enroll()  

function creatCourse(tittle) {
    return {
        tittle: tittle,
        enroll() {
            console.log("You are successfully enrolled =");
        }
    }
}
const newCourse = creatCourse('Javascript');
// const course = creatCourse('Javascript');

// course.enroll()
// console.log(course)

// CONSTRUCTOR FUNCATION 

function Course(tittle) {
    this.tittle = tittle,
    this.enroll = function(){
        console.log("You are sucessfully enrolled");
    }
}

const course = new Course('Javascript');
console.log(course.constructor)
console.log(newCourse.constructor)

// DELETE OBJECT

// delete course.tittle;

// course.enroll()
// console.log(course);