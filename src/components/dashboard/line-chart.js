import {getColor} from '../../functions/colors'
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend
} from 'recharts'
import {random} from '../../functions/numbers'

const CustomTooltip = ({active, payload, label}) => {
  if (active) {
    let {name,Maputo,Tete,Nampula,Gaza} = {...payload[0].payload}
    return (
      <div className="bg-white text-gray-900 dark:bg-gray-800 dark:text-white shadow-lg rounded-lg p-2 text-xs">
        <div className="font-bold">{name}</div>
        <div>
          <span className="font-bold">Atendimento:</span>{' '}
          <span className="font-normal">{Maputo}</span>
        </div>
        <div>
          <span className="font-bold">Facilidade Acesso:</span>{' '}
          <span className="font-normal">{Tete}</span>
        </div>
        <div>
          <span className="font-bold">FSeguranca:</span>{' '}
          <span className="font-normal">{Nampula}</span>
        </div>
        <div>
          <span className="font-bold">Tarifas:</span>{' '}
          <span className="font-normal">{Gaza}</span>
        </div>
      </div>
    )
  }
  return null
}

export const Line1 = () => {
  let colors = [
    {dataKey: 'Maputo', stroke: getColor('bg-blue-200')},
    {dataKey: 'Tete', stroke: getColor('bg-yellow-400')},
    {dataKey: 'Nampula', stroke: getColor('bg-gray-500')},
    {dataKey: 'Gaza', stroke: getColor('bg-red-600')}
  ]
  const labels = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ]
  const data = Array.from(Array(12).keys()).map(i => {
    return {
      name: labels[i],
      Maputo: random(0, 500),
      Tete: random(0, 500),
      Nampula:random(0, 500),
      Gaza:random(0, 500)
    }
  })

  return (
    <div style={{width: '100%', height: 320}}>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 10,
            right: 10,
            left: 10,
            bottom: 10
          }}>
          <XAxis dataKey="name" axisLine={false} tickLine={false} />
          <YAxis axisLine={false} tickLine={false} width={30} />
          <Tooltip content={<CustomTooltip />} />
          <Legend verticalAlign="top" height={36} iconType="circle" />
          {colors.map((color, i) => (
            <Line
              key={i}
              type="monotone"
              dataKey={color.dataKey}
              stroke={color.stroke}
              strokeWidth={2}
              activeDot={{r: 8}}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
