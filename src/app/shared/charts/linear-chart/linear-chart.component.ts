import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-linear-chart',
  templateUrl: './linear-chart.component.html',
  styleUrls: ['./linear-chart.component.scss'],
})
export class LinearChartComponent implements OnInit, AfterViewInit {
  chart = [];
  private canvas;
  private ctx;

  constructor() {
    this.extendLine();
  }

  ngOnInit(): void {
    this.canvas = document.getElementById('myChart');
    this.ctx = this.canvas.getContext('2d');

    this.chart = new Chart(this.ctx, {
      type: 'LineWithLine',
      data: {
        labels: ['lun', 'mar', 's', '3', 's', 'a', 'b'],
        datasets: [
          {
            data: [3, 4, 2, 1, 0, 26, 3],
            borderColor: '#0B829B',
            borderWidth: 1.2,
            fill: false,
            pointRadius: 0,
          },
        ],
      },
      options: {
        hover: {
          mode: 'index',
          intersect: false,
        },
        tooltips: {
          enabled: false,
          custom: function (tooltipModel) {
            // Tooltip Element
            var tooltipEl = document.getElementById('chartjs-tooltip');
            // Hide if no tooltip
            if (tooltipModel.opacity === 0) {
              tooltipEl.style.opacity = '0';
              return;
            }

            tooltipModel.caretX = tooltipModel.caretX + 70;

            // Set caret Position
            tooltipModel.xAlign = 'right';
            tooltipEl.classList.remove('center', 'above', 'no-transform');

            if (tooltipModel.xAlign) {
              tooltipEl.classList.add(tooltipModel.xAlign);
            } else {
              tooltipEl.classList.add('no-transform');
            }

            let p2pValue = '';
            let httpValue = '';
            let totalValue = p2pValue + httpValue;

            //write content of tooltip elements
            document.getElementById('title').innerHTML = '22 price samples';
            document.getElementById('p2p-value').innerHTML = '';
            document.getElementById('best-buy').innerHTML = '24,000';
            document.getElementById('best-sell').innerHTML = '59,000';
            document.getElementById('total-value').innerHTML = '';

            var position = this._chart.canvas.getBoundingClientRect();

            tooltipEl.style.opacity = '1';
            tooltipEl.style.position = 'fixed';

            if (window.innerWidth > position.x + tooltipModel.caretX + 130) {
              tooltipEl.style.left =
                position.x + tooltipModel.caretX + 20 + 'px';
            } else {
              tooltipEl.style.left =
                position.x + tooltipModel.caretX - 150 + 'px';
            }

            tooltipEl.style.top = position.y + tooltipModel.caretY - 20 + 'px';

            tooltipEl.style.fontFamily = tooltipModel._bodyFontFamily;
            tooltipEl.style.fontSize = tooltipModel.bodyFontSize + 'px';
            tooltipEl.style.fontStyle = tooltipModel._bodyFontStyle;
            tooltipEl.style.padding =
              tooltipModel.yPadding + 'px ' + tooltipModel.xPadding + 'px';
            tooltipEl.style.pointerEvents = 'none';
          },
        },
        legend: {
          display: false,
        },
        scales: {
          xAxes: [
            {
              ticks: {
                beginAtZero: true,
                fontColor: '#D8D8D8',
              },
              gridLines: {
                display: false,
              },
              display: true,
            },
          ],
          yAxes: [
            {
              gridLines: {
                display: false,
              },
              display: false,
            },
          ],
        },
      },
    });
  }

  ngAfterViewInit() {}

  private extendLine() {
    let draw = Chart.controllers.line.prototype.draw;
    Chart.controllers.line.prototype.draw = function () {
      let chart = this.chart;
      let ctx = chart.ctx;
      let _stroke = ctx.stroke;
      ctx.stroke = function () {
        ctx.save();
        ctx.shadowColor = ctx.strokeStyle;
        ctx.shadowBlur = 6;
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 2;
        _stroke.apply(this, arguments);
        ctx.restore();
      };
      draw.apply(this, arguments);
      ctx.stroke = _stroke;
    };

    Chart.defaults.LineWithLine = Chart.defaults.line;
    Chart.controllers.LineWithLine = Chart.controllers.line.extend({
      draw: function (ease) {
        Chart.controllers.line.prototype.draw.call(this, ease);
        if (this.chart.tooltip._active && this.chart.tooltip._active.length) {
          var activePoint = this.chart.tooltip._active[0],
            ctx = this.chart.ctx,
            x = activePoint.tooltipPosition().x,
            topY = this.chart.scales['y-axis-0'].top,
            bottomY = this.chart.scales['y-axis-0'].bottom;

          // draw line
          ctx.save();
          ctx.beginPath();
          ctx.moveTo(x, topY);
          ctx.lineTo(x, bottomY + 10);
          ctx.lineWidth = 1;
          ctx.strokeStyle = 'rgba(0,0,0,0.1)';
          ctx.stroke();
          ctx.restore();
        }
      },
    });
  }
}
