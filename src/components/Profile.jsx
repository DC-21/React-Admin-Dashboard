import'./profile.css'
import { Link } from "react-router-dom";

const Profile = () => {

  return (
    <div className='profile' style={{ padding: '20px' }}>
      <div
        className='side'
        style={{
          width: '195px',
          borderRadius: '5px',
          height: '380px'
        }}
      >
        <p style={{ fontSize: '1.3em', padding: '20px' }}>profile settings</p>
        <div className='links' style={{ paddingLeft: '20px' }}>
          <Link to="/username" style={{ cursor: 'pointer' }}>
            <p
              style={{
                height: '25px',
                paddingLeft: '8px',
                alignItems: 'center',
                paddingTop: '14px'
              }}
            >
              Username
            </p>
          </Link>
          <Link to="/password" style={{ cursor: 'pointer' }}>
            <p
              style={{
                height: '25px',
                paddingLeft: '8px',
                alignItems: 'center',
                paddingTop: '14px'
              }}
            >
              Password
            </p>
          </Link>
          <Link to="/team" style={{ cursor: 'pointer' }}>
            <p
              style={{
                height: '25px',
                paddingLeft: '8px',
                alignItems: 'center',
                paddingTop: '14px'
              }}
            >
              Team
            </p>
          </Link>
          <Link to="/email" style={{ cursor: 'pointer' }}>
            <p
              style={{
                height: '25px',
                paddingLeft: '8px',
                alignItems: 'center',
                paddingTop: '14px'
              }}
            >
              Email
            </p>
          </Link>
          <Link to="/plan" style={{ cursor: 'pointer' }}>
            <p
              style={{
                height: '25px',
                paddingLeft: '8px',
                alignItems: 'center',
                paddingTop: '14px'
              }}
            >
              Plan
            </p>
          </Link>
          <Link to="/billing" style={{ cursor: 'pointer' }}>
            <p
              style={{
                height: '25px',
                paddingLeft: '8px',
                alignItems: 'center',
                paddingTop: '14px'
              }}
            >
              Billing
            </p>
          </Link>
          <Link to="/integrations" style={{ cursor: 'pointer' }}>
            <p
              style={{
                height: '25px',
                paddingLeft: '8px',
                alignItems: 'center',
                paddingTop: '14px'
              }}
            >
              Integrations
            </p>
          </Link>
        </div>
        <div>
          <button
            style={{
              position: 'fixed',
              bottom: '5px',
              right: '8px',
              zIndex: '999',
              cursor: 'pointer',
              color: 'white',
              fontSize: '4rem',
              backgroundColor: '#00b3b3',
              width: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '60%',
              animation: 'bounce 1s infinite'
            }}
          >rt
            <ion-icon name="bug-outline"></ion-icon>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;