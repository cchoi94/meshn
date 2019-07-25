import Link from 'next/link'
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import ActivityIcon from '@material-ui/icons/Menu';
import BookIcon from '@material-ui/icons/EventNote';
import ProfileIcon from '@material-ui/icons/Person';

export default function SimpleBottomNavigation(props) {
  const [value, setValue] = React.useState(0);
  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
        console.log(event, newValue)
      }}
      showLabels
      className="root"
    >
      <Link href="/">
        <BottomNavigationAction showLabel label="Activity" icon={<ActivityIcon />} />
      </Link>
      <Link href="book">
        <BottomNavigationAction showLabel label="Book" href="book" icon={<BookIcon />} />
      </Link>
      <Link href ="profile">
        <BottomNavigationAction showLabel label="Profile" href="profile" icon={<ProfileIcon />} />
      </Link>
    <style jsx>
      {``}
    </style>
    </BottomNavigation>
  );
}