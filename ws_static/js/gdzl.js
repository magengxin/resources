$('.gd_sel >ul >li').click(function(){
	$(this).parent().hide();
	$('.gd_sel >p').html($(this).html());
	
})
// 当年实时可靠性第一个canvas

$(function () {
		renderLayer()
	})

		function renderLayer() {
				drawLayer($("#content-chart01 canvas").get(0), "rgb(25, 191, 252)", 0.9);
				drawLayer_sec($("#content-chart02 canvas").get(0), "rgb(0, 151, 255)", 0.8);
				drawLayer_th($("#content-chart03 canvas").get(0), "rgb(237, 248, 255)", 0.4);

		}

		function drawLayer(canvasObj, colorValue, rate) {
				var ctx = canvasObj.getContext("2d");

		var circle = {
				x: 135, //圆心的x轴坐标值
				y: 145, //圆心的y轴坐标值
				r: 125 //圆的半径
		};

//画扇形
//ctx.sector(circle.x,circle.y,circle.r,1.5*Math.PI,(1.5+rate*2)*Math.PI);
//ctx.fillStyle = colorValue;
//ctx.fill();

ctx.beginPath();
ctx.arc(circle.x, circle.y, circle.r, 0, Math.PI * 2)
ctx.lineWidth = 18;
ctx.strokeStyle = 'rgb(38,85,115)';
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.arc(circle.x, circle.y, circle.r, 1.5 * Math.PI, (1.5 + rate * 2) * Math.PI)
ctx.lineWidth = 18;
ctx.lineCap = 'round';
ctx.strokeStyle = colorValue;
ctx.stroke();
ctx.closePath();

ctx.fillStyle = 'white';
ctx.font = '20px Calibri';
// ctx.fillText(rate * 150 + '%', circle.x - 20, circle.y + 10);

}
// 第二个
function drawLayer_sec(canvasObj, colorValue, rate) {
				var ctx = canvasObj.getContext("2d");

		var circle = {
				x: 58, //圆心的x轴坐标值
				y: 72, //圆心的y轴坐标值
				r: 50 //圆的半径
		};

//画扇形
//ctx.sector(circle.x,circle.y,circle.r,1.5*Math.PI,(1.5+rate*2)*Math.PI);
//ctx.fillStyle = colorValue;
//ctx.fill();

ctx.beginPath();
ctx.arc(circle.x, circle.y, circle.r, 0, Math.PI * 2)
ctx.lineWidth = 14;
ctx.strokeStyle = 'rgb(38,85,115)';
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.arc(circle.x, circle.y, circle.r, 1.5 * Math.PI, (1.5 + rate * 2) * Math.PI)
ctx.lineWidth = 14;
ctx.lineCap = 'round';
ctx.strokeStyle = colorValue;
ctx.stroke();
ctx.closePath();

ctx.fillStyle = 'white';
ctx.font = '20px Calibri';
// ctx.fillText(rate * 150 + '%', circle.x - 20, circle.y + 10);

}
// 第三个
function drawLayer_th(canvasObj, colorValue, rate) {
				var ctx = canvasObj.getContext("2d");

		var circle = {
				x: 58, //圆心的x轴坐标值
				y: 72, //圆心的y轴坐标值
				r: 50 //圆的半径
		};

//画扇形
//ctx.sector(circle.x,circle.y,circle.r,1.5*Math.PI,(1.5+rate*2)*Math.PI);
//ctx.fillStyle = colorValue;
//ctx.fill();

ctx.beginPath();
ctx.arc(circle.x, circle.y, circle.r, 0, Math.PI * 2)
ctx.lineWidth = 14;
ctx.strokeStyle = 'rgb(38,85,115)';
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.arc(circle.x, circle.y, circle.r, 1.5 * Math.PI, (1.5 + rate * 2) * Math.PI)
ctx.lineWidth = 14;
ctx.lineCap = 'round';
ctx.strokeStyle = colorValue;
ctx.stroke();
ctx.closePath();

ctx.fillStyle = 'white';
ctx.font = '20px Calibri';
// ctx.fillText(rate * 150 + '%', circle.x - 20, circle.y + 10);

}