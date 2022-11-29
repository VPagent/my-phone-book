import {ClockLoader} from 'react-spinners'



const Loader:React.FC = () => {

    return(
        <ClockLoader cssOverride={{
            'marginLeft': 'auto',
            'marginRight': 'auto',
            'marginTop': '200px'
          }}/>
    )
}

export default Loader