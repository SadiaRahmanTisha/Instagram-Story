var arr = [
	{dp: "https://images.unsplash.com/photo-1440589473619-3cde28941638?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1vZGVsfGVufDB8fDB8fHww",story: "https://images.unsplash.com/photo-1521577352947-9bb58764b69a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1vZGVsfGVufDB8fDB8fHww"},
	{dp: "https://images.unsplash.com/photo-1488161628813-04466f872be2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fG1vZGVsfGVufDB8fDB8fHww",story: "https://images.unsplash.com/photo-1527010154944-f2241763d806?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D"},
	{dp: "https://images.unsplash.com/photo-1464863979621-258859e62245?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",story: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D"},
	{dp: "https://images.unsplash.com/photo-1593757147298-e064ed1419e5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8",story: "https://images.unsplash.com/photo-1530043852391-d982ec7a8ecd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D"},
	{dp: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",story: "https://images.unsplash.com/photo-1605813808178-d98ed02529bf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8"},
	{dp: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fG1vZGVsfGVufDB8fDB8fHww",story: "https://images.unsplash.com/photo-1529680459049-bf0340fa0755?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D"},
	{dp: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D",story: "https://images.unsplash.com/photo-1571513800374-df1bbe650e56?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D"},
	{dp: "https://images.unsplash.com/photo-1571513722275-4b41940f54b8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8",story: "https://images.unsplash.com/photo-1577788473726-453d0675747f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8"},
	{dp: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODJ8fG1vZGVsfGVufDB8fDB8fHww",story: "https://images.unsplash.com/photo-1496440737103-cd596325d314?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODR8fG1vZGVsfGVufDB8fDB8fHww"},
	{dp: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTU1fHxtb2RlbHxlbnwwfHwwfHx8MA%3D%3D",story: "https://images.unsplash.com/photo-1550614000-4895a10e1bfd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODd8fG1vZGVsfGVufDB8fDB8fHww"},
	{dp: "https://images.unsplash.com/photo-1515734674582-29010bb37906?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTgxfHxtb2RlbHxlbnwwfHwwfHx8MA%3D%3D",story: "https://images.unsplash.com/photo-1579101098070-c3f50dcbd312?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAyfHxtb2RlbHxlbnwwfHwwfHx8MA%3D%3D"},
	{dp: "https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njh8fG1vZGVsfGVufDB8fDB8fHww",story: "https://images.unsplash.com/photo-1536766820879-059fec98ec0a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI0fHxtb2RlbHxlbnwwfHwwfHx8MA%3D%3D"},
	{dp: "https://images.unsplash.com/photo-1511424323602-d3c1a4138056?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTg4fHxtb2RlbHxlbnwwfHwwfHx8MA%3D%3D",story: "https://images.unsplash.com/photo-1516446636564-c48e723868fc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI2fHxtb2RlbHxlbnwwfHwwfHx8MA%3D%3D"},
];


var clutter = ""
arr.forEach(function(elem,idx){
	clutter += `<div class="story">
				<img id="${idx}" src="${elem.dp}" alt="">
			</div>`
})


document.querySelector(".storiyan").innerHTML = clutter
document.querySelector(".storiyan").addEventListener("click", function(dets){
	document.querySelector(".full-screen").style.display ="block"
	document.querySelector(".full-screen").style.backgroundImage = `url(${arr[dets.target.id].story})`
	setTimeout(function(){
		document.querySelector(".full-screen").style.display ="none"
	},1000)

})








 
