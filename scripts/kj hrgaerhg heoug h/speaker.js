class Speaker {
  constructor() {
    const AudioContext = window.AudioContext || window.webkitAudioContext;

    this.audioCtx = new AudioContext();

    this.gain = this.audioCtx.createGain();
    this.finish = this.audioCtx.destination;

    this.gain.connect(this.finish);
    this.gain.setValueAtTime(0, this.audioCtx.currentTime);
    this.gain.setValueAtTime(1, this.audioCtx.currentTime);
  }
play(frequency){
    if(this.audioCtx && !this.oscillator){
        this.oscillator = this.audioCtx.createOscillator();
// set the frequncy
        this.oscillator.frequency.setValueAtTime(frequency || 440, this.audioCtx.currentTime)
    //square wave
    this.oscillator.type = 'square'

    //connect the oscillator

    this.oscillator.connect(this.gain);
    this.oscillator.start();
    }

}
stop(){
    if (this.oscillator){
        this.oscillator.stop();
this.oscillator.disconnect();
this.oscillator = null;
    }

}
}

export default Speaker;
