const hr = document.getElementById('Hours')
const min = document.getElementById('Mins')
const sec = document.getElementById('secs')
const mil = document.getElementById('mil')
const pm = document.getElementById('pm')

function digitalClock(){

const h = new Date().getHours()
const m = new Date().getMinutes()
const s = new Date().getSeconds()
const mm = new Date().getMilliseconds()

hr.textContent = h  > 12 ? h - 12 : h
min.textContent = m > 10 ? m : '0' + m
sec.textContent = s >= 10 ? s : '0' + s
mil.textContent = mm
pm.textContent = h >= 12 ? 'pm' : 'am'


setTimeout(()=>digitalClock(), 100)
}

digitalClock()