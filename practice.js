const people = [
    {name:"Alice", age:20},
    {name:"Eunice",age:16},
    {name:"Chanice", age:18},
    {name:"Maxy", age:14},
    {name:"Summy", age:40}
];

function grownUps(){
    let mature = [];
    people.forEach(person => {
        if(person.age >= 18){
            mature.push(person);
        }
    })
    console.log(mature);
    return mature;
}
grownUps(people);

const products = [
    {name:"Laptop", price:1200, category:"Electronics"},
    {name:"Shirt", price:25, category:"Clothing"},
    {name:"Headphones", price:80, category:"Electronics"},
    {name:"Shoes", price:60, category:"Clothing"}
]

function categorised(){


    const itemArray = [];
    const categoryArray = [];

    products.forEach(item => {
        // delete item.price;
        if(item.category == "Electronics"){
         itemArray.push(item['name']);
        }
        else if (item.category == "Clothing"){
        categoryArray.push(item['name']);
        }
    
    }
    )

    const product = new Object();
    product.Electronics = itemArray;
    product.Clothing = categoryArray;
    console.log(product);
    return product;

}
categorised()

function reverseNumber(num){
    const changeNum = num.toString().split('').reverse();
    const backToNum = Number(changeNum.join(''));
    return backToNum;
}

console.log(reverseNumber(12345));

function checkPalindrome(word){
    if((word.toLowerCase().split('').reverse().join('')) == (word.toLowerCase())){
        return `${word} is palindrome`
    }
    else{
        return `${word} is not palindrome!`
    }
}

console.log(checkPalindrome("wow"));

function sub(word){
    subString
}

const student = {
    name:"Priscilla",
    sclass:"VI",
    rollno: 12,
    display:function(){
        console.log(`${this.name},${this.rollno},${this.sclass}`)
    },
    deletion:function(){
        return delete this.rollno;
    },
    objLen:function(){
        let len = 0;
        for(let item in student){
            if(student.hasOwnProperty(item)){
                len+=1;
            }
        }
        return len
    }
};

student.display();
console.log({student})
console.log(student.deletion())
console.log({student})
console.log(student.objLen());

const Library = [
    {
        author:'Bill Gates',
        title:'The Road Ahead',
        readingStatus: true
    },
    {
        author:'Steve Jonnes',
        title:'Watter Isaacson',
        readingStatus: true
    },
    {
        author:'Suzanne Collins',
        title:'MockingJay: The Final Book of The Hunger Games',
        readingStatus: false
    }
];

function displayStatus(){
    for(let i = 0;i < Library.length; i++){
        if(Library[i].readingStatus == true){
            console.log(`You have already read ${Library[i].title} by ${Library[i].author}`);
        }
        else{
            console.log(`You have not yet finished reading ${Library[i].title} by ${Library[i].author}`);
        }
    }
}

displayStatus(Library);

const Cylinder = {
    height: 20,
    radius: 5,
    volume: function(){
        const pi = 3.14159;
        const calculation = pi/(this.height*(this.radius*this.radius));
        return Number(calculation.toFixed(4));
    }
} 
 
console.log({Cylinder});
console.log(Cylinder.volume());

class Person{
    constructor(name,age,country){
        this.names = name,
        this.age = age,
        this.country = country
    }
    display(){
      console.log(this.names);
      console.log(this.age);
      console.log(this.country);
    }
}

const person1 = new Person("Mikisa", 20, "Uganda");
 console.log({person1});
 person1.display();

const person2 = new Person("Kirwa", 20, "Indian - Ugandan");
console.log({person2});
person2.display();

class Rectangle{
    constructor(width,height){
        this.width = width,
        this.height = height
    }
    area(){
        const calculate = this.width * this.height;
        return calculate;
    }
    perimeter(){
        const calculate = (2 * this.height)+(2 * this.width);
        return calculate;
    }
}

  const rectangle1 = new Rectangle(20, 2);
  console.log(rectangle1.area());
  console.log(rectangle1.perimeter());

  const rectangle2 = new Rectangle(3, 4);
  console.log(rectangle2.area());
  console.log(rectangle2.perimeter());

  class Vehicle{
    constructor(make, model, year){
        this.make = make,
        this.model = model,
        this.year = year
    };
    displayDetail(){
        return `${this.make}, ${this.model}, ${this.year}`;
    }
  }

  class truck extends Vehicle{
    constructor(make, model, year, doors){
        super(make,model,year)
        this.doors = doors
    };
    displayDetail(){
       console.log(`${super.displayDetail()}, ${this.doors}`);
    }
  }

 const car = new truck("Toyota", "Hilux", 2024, 34);
 console.log({car});
 car.displayDetail();


 class League{
    constructor(Availablevenuevenue,time, team){
      this.Availablevenuevenue = Availablevenuevenue,
      this.time = time,
      this.team = team
    }
    assign(){
        return `${this.team} has been assigned to ${this.Availablevenuevenue} at ${this.time}`
    }

 }

 const firstLeague = new League( "stadium hall Kampala", "5:00 pm", "Cheaters");
 console.log({firstLeague});
 console.log(firstLeague.assign())

 function getIceCream(callback,fruit){
    setTimeout(()=> {
        console.log("added started making icecream")
    })

 }


class TaskManager{
    constructor(){
        this.taskList = [];
    }
    add_task(taskNmae,taskDescription,taskPriority){
      const  taskId = this.taskList.length+1;
        const newTask = {taskNmae:taskNmae,taskDescription:taskDescription,taskPriority:taskPriority,id:taskId};
        if(this.taskList.length <= 0){
            this.taskList.push(newTask)
        } 
        else if(this.taskList.length > 0){
            this.taskList.sort((a,b)=>a.taskPriority-b.taskPriority);
            this.taskList.push(newTask);
        }
        console.log(this.taskList)
        console.log("Your task has been successfully added!!")
    }
}

const task = new TaskManager();
task.add_task("Cook for me","Wake and up and make me a rolex",3);
task.add_task("Cook for me","Wake and up and make me a rolex",4);
task.add_task("Cook for me","Wake and up and make me a rolex",1);
task.add_task("Cook for me","Wake and up and make me a rolex",2);
task.add_task("Cook for me","Wake and up and make me a rolex",5);
task.add_task("Cook for me","Wake and up and make me a rolex",4);

class Movies{
    constructor(){
        this.movieList = [];

    }
   addMovieProject(castMembers, dueDate, budgets){
        let movieId = this.movieList.length+1
        const newProject = {castMembers:castMembers, dueDate:dueDate, budgets:budgets, movieId:movieId};
        this.movieList.push(newProject);
        return this.movieList
    }
    organiseSchedule(){
        let schedule = [];
        let currentDate = new Date();
             currentDate = currentDate.getTime();
             for(let i = 0; i < this.movieList.length; i++){
                let due = this.movieList[i].dueDate.getTime();
                let diff = currentDate - due;
                this.movieList[i].difference = diff.toDate();
                let arranged = schedule.sort((a,b) => a.dueDate-b.dueDate)
                console.log(arranged)
             }
             console.log(schedule)
    }
    
}
 const project =new Movies();
 console.log(project.addMovieProject(['Mikisa','Seth Rollins', 'Roman Reigns', 'AJ-Styles', 'Sasha Banks'],21/5/2024,5000))
 console.log(project.addMovieProject(['Allan','Cain', 'Abel', 'James', 'Calle'],18/5/2024,5000))
 console.log(project.addMovieProject(['Nelly','Henry', 'Simpson', 'Styles', 'Banks'],19/5/2024,5000))
 console.log(project.addMovieProject(['Mikisa','Seth Rollins', 'Roman Reigns', 'AJ-Styles', 'Sasha Banks'],20/5/2024,5000))







