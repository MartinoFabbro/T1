 function hash() {
    var hash = 0, i, chr;
    if (this.length === 0) return hash;
    for (i = 0; i < this.length; i++) {
      chr   = this.charCodeAt(i);
      hash  = ((hash << 5) - hash) + chr;
      hash |= 0; // Convert to 32bit integer
    }
    return hash;
  };

let objPeople = 
[{username: "asd", password: "asd"},
{username: "asd1", password: "asd1"},
{username: "asd2", password: "asd2"},
{username: "asd3", password: "asd3"},
{username: "asd4", password: "asd4"},
{username: "asd5", password: "asd5"},];


console.log(hash());