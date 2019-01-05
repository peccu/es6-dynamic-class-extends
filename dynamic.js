// This sample is based on https://www.mikedoesweb.com/2017/dynamic-super-classes-extends-in-es6/
export class FS {
  constructor(config){
    console.log('FS constructor called with', config);
    this.wd = __dirname + '/' + config.wd;
  }
  cwd(){
    console.log('current working directory is', this.wd);
    return this.wd;
  }
}

export class BrowserFS {
  constructor(config){
    console.log('BrowserFS constructor called with', config);
    this.wd = '/' + config.wd;
  }
  cwd(){
    console.log('current working directory is', this.wd);
    return this.wd;
  }
}

export class DefaultClass {
  constructor(config){
    console.log('Plain constructor called with', config);
    this.wd = config.wd;
  }
  cwd(){
    console.log('current working directory is', this.wd);
    return this.wd;
  }
};
const Dynamic = function(config = {}){
  if(!new.target){
    throw 'Uncaught TypeError: Class constructor Dynamic cannot be invoked without \'new\'';
  }
  if(config.backend === 'fs'){
    class Dynamic extends FS {
      constructor(config){
        super(config);
        console.log('dynamically extended FS');
      }
    };
    return new Dynamic(config);
  }

  if(config.backend === 'browserfs'){
    class Dynamic extends BrowserFS {
      constructor(config){
        super(config);
        console.log('dynamically extended BrowserFS');
      }
    };
    return new Dynamic(config);
  }
  return new DefaultClass(config);
};
export default Dynamic;
