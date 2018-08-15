import Cookies from 'universal-cookie';
const cookie = new Cookies();
class Page{
    // 保存刷新前页面信息
    static savePageInfo(index,sub,page){
        cookie.set('pageInfo',JSON.stringify({index,sub,page}));
      }
    //获得刷新前页面信息
    static getPageInfo(){
        return cookie.get('pageInfo')||{};
    }
}
export default Page;