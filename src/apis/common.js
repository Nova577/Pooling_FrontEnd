import request from '../utils/request'

function cityListApi(data){
  return request({
  	method:"get",url:'/api/common/city/list',params:data
  });
}

function configApi(){
	return request({
  	method:"get",url:'/api/common/config/get'
  });
}


export {
	cityListApi,configApi
}