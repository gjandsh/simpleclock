var center = document.createElement('div')
var second = document.createElement('div')
var minute = document.createElement('div')
var hour = document.createElement('div')
var circle = document.createElement('div')
function step(second,minute,hour,center,circle){

var now = new Date()
var hours = now.getHours()
var minutes = now.getMinutes()
var seconds = now.getSeconds()

if(hours>12){
  hours -= 12
}

var secondDeg = seconds/60 * 360
var minuteDeg = (minutes * 60 + seconds) / 3600 * 360
var hourDeg = (hours*3600 + minutes*60 + seconds) / (12 * 3600) * 360

var select = document.querySelector('.clock')

select.appendChild(hour)
select.appendChild(minute)
select.appendChild(center)
select.appendChild(second)
select.appendChild(circle)
//style of circle
circle.style.width='10px'
circle.style.height='10px'
circle.style.position='absolute'
circle.style.left='50%'
circle.style.top='50%'
circle.style.marginTop='-2.5px'
circle.style.marginLeft='-4.5px'
circle.style.backgroundColor='#C8453C'
circle.style.borderRadius='50%'
circle.style.filter='drop-shadow(0 0px 2px black)'
//style of center
center.style.width='20px'
center.style.height='20px'
center.style.border='1px solid #DADADA'
center.style.backgroundColor='#FAFAFA'
center.style.borderRadius='50%'
center.style.position='absolute'
center.style.left='50%'
center.style.top='50%'
center.style.marginTop='-9px'
center.style.marginLeft='-10px'
center.style.filter='drop-shadow(0 0 4px black)'
//style of second
second.style.left='50%'
second.style.position='absolute'
second.style.top='50%'
second.style.transformOrigin='20px 2.5px'
second.style.transform = `rotate(${-90+secondDeg}deg)`
second.style.marginLeft='-20px'
second.style.height='1px'
second.style.border='100px solid #C8453C'
second.style.borderTopWidth='2px'
second.style.borderBottomWidth='2px';
second.style.borderTopColor='transparent';
second.style.borderBottomColor='transparent';
second.style.borderRightColor='transparent';
second.style.borderRadius='20px'
second.style.filter='drop-shadow(0 0 4px black)'
//style of minute
minute.style.position='absolute'
minute.style.left='50%'
minute.style.height='10px'
minute.style.background='#FAFAFA'
minute.style.borderRadius='20px'
minute.style.top='50%'
minute.style.width='60px'
minute.style.marginTop='-2.5px'
minute.style.transform = `rotate(${-90+minuteDeg}deg)`
minute.style.transformOrigin='0px 5px'
minute.style.filter='drop-shadow(0 0 4px black)'
//style of hour
hour.style.position='absolute'
hour.style.left='50%'
hour.style.height='10px'
hour.style.background='#FAFAFA'
hour.style.borderRadius='30px'
hour.style.top='50%'
hour.style.width='50px'
hour.style.marginTop='-2.5px'
hour.style.transform = `rotate(${-90+hourDeg}deg)`
hour.style.transformOrigin='0px 5px'
hour.style.filter='drop-shadow(0 0 4px black)'
}
 step(second,minute,hour,center,circle)
setTimeout(function () {
            step(second,minute,hour,center,circle)
            setTimeout(arguments.callee, 1000);
        }, 1000)