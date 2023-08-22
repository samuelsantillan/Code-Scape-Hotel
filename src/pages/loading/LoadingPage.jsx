import loadingGif from '../../assets/loading.gif'
import './loadingStyle.css'
const LoadingPage = () => {
  return (
    <div className="loadingPage">
      <img src={loadingGif} alt="Cargando..." />
    </div>
  );
};

export default LoadingPage;