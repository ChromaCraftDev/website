import { Link } from 'react-router-dom';
import ErrorPageCss from'./ErrorPage.module.css';
export default function ErrorPage(){
    return (
    <div className={ErrorPageCss.body}>
      <h1 className={ErrorPageCss.h1}>404 Not found</h1>
      <Link to="/website/" className={ErrorPageCss.a}>Back to HomePage</Link>
   </div>
       
);

}