
$( document ).ready(function() {

    function Stopwatch () {
        // Private Variables
        let startTime, timeDiff, running = false, _this = this;

        this.test = '1234'
    
        // Public variables
        this.start = function() {
            if (running) {throw new Error('Stopwatch has already started.')}
            startTime = new Date();
            running=true;
        };
    
        this.stop = function() {
            if (!running) {throw new Error('Stopwatch is already stopped.');}
            let endTime = new Date();
            timeDiff = Math.floor((endTime - startTime)/1000);
            running=false;
        }
    
        this.duration = function () {
            if(running) {throw new Error('Stopwatch is still running.');
            } else {
                let hours=0;
                let mins=0;
                let secs=0;
                if(timeDiff>3600){
                    hours=Math.floor(timeDiff/3600);
                    timeDiff=timeDiff-(hours*3600);
                }
                if(timeDiff>60){
                    mins=Math.floor(timeDiff/60);
                    timeDiff=timeDiff-(mins*60);
                }
                let myString = hours+'h, ' + mins + 'm, ' + timeDiff + 's';
                console.log(myString)
                return timeDiff;
            }
        }
    
        this.reset = function () {
            if (running) {throw new Error('Error. Please stop watch before resetting.')
            } else {
                startTime = null;
                timeDiff = 0;
                running = false;
            }
        }

        // DOM manipulation
        $( "#stop" ).click(function() {_this.stop();});

        $( "#start" ).click(function() {_this.start();});

        $( "#duration" ).click(function() {_this.duration();});

        $( "#reset" ).click(function() {_this.reset();});
    }

    let watch = new Stopwatch();
});

