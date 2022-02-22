class Support {
    name;
    role = 'support new web dev '
    address = 'BD'
    constructor(name, address){
        this.name = name;
        this.address = address;
    }
    startSession(){
        console.log(this.name, 'start a support session');
    }
}

const bokkor = new Support ('Abu Bakkor', 'oman');

const nayeem = new Support ('Nayeem Talukder', 'chittagong');

const jobair = new Support ('Jobair Sarkar', 'Dubai');
bokkor.startSession();
console.log(bokkor, nayeem, jobair);