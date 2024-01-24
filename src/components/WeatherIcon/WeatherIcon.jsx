import './WeatherIcon.css';

// props { type: '맑고 구름 조금' | '맑음' | '천둥' | '비' | '미세먼지' }

function WeatherIcon(props) {
  const label = props.type;

  return (
    <img src="/images/weather-partly-cloudy.svg" alt={label} title={label} />
  );
}

export default WeatherIcon;