import request from '../utils/request'

function LoginApi(data){
  return request({
  	method:"post",url:'/api/user/login',data
  });
}

function sendVerifyCode(data){
  return request({
    method:'post',url:'/api/common/verify/get',data
  })
}

function verifyCodePut(data){
  return request({
    method:'post',url:'/api/common/verify/put',data
  })
}

function registerApi(data){
   return request({
    method:'post',url:'/api/user/register',data
  })
}

function userGetApi(){
  return request({
    method:'get',url:'/api/user/get'
  })
}


export {
	LoginApi,sendVerifyCode,verifyCodePut,registerApi,userGetApi
}