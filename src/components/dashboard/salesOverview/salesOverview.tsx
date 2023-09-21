import React from 'react'
import "./salesOverview.scss"
import { Column } from '@ant-design/plots';


const SalesOverview = () => {
      const data: any = [
                        {
                  type: 'July',
                  sales: 342,
            },
            {
                  type: 'Aug',
                  sales: 343,
            },
            {
                  type: 'Sep',
                  sales: 114,
            },
            {
                  type: 'Oct',
                  sales: 222,
            },
            {
                  type: 'Nov',
                  sales: 123,
            },
            {
                  type: 'Dec',
                  sales: 567,
            },
      ];
      const config: any = {
            data,
            xField: 'type',
            yField: 'sales',
            label: {
                  // 可手动配置 label 数据标签位置
                  position: 'middle',
                  // 'top', 'bottom', 'middle',
                  // 配置样式
                  style: {
                        fill: '#FFFFFF',
                        opacity: 0.6,
                  },
            },
            xAxis: {
                  label: {
                        autoHide: true,
                        autoRotate: false,
                  },
            },
            meta: {
                  type: {
                        alias: 'S',
                  },
                  sales: {
                        alias: 'Total Sales',
                  },
            },
      };
      return (
            <div className='sales-overview-wrapper bx-bg--white border-repel card-shadow'>
                  <h4>Sales Overview (Last 6 months)</h4>
                  <Column {...config} style={{height:"200px"}}/>
            </div>
      )
}

export default SalesOverview