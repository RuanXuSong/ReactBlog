import Cookies from 'universal-cookie';
const cookie = new Cookies();
class Page{
    static savePageInfo(index,sub,page){
        cookie.set('pageInfo',JSON.stringify({index,sub,page}));
      }
    static getPageInfo(){
        return cookie.get('pageInfo')||{};
    }
}
export default Page;