from django.shortcuts import render
from .models import Book,Userinfo
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt,csrf_protect
from django.views.decorators.http import require_http_methods
import json

# Create your views here.
@require_http_methods(["POST"])
@csrf_exempt
def add_book(request):
    response = {}
    try:
        book = Book(book_name='倚天屠龙记')
        book.save()
        response['msg'] = 'success'
        response['error_num'] = 0
        response['status_code'] = 200
    except  Exception as e:
        response['msg'] = str(e)
        response['error_num'] = 1
    return HttpResponse(json.dumps(response),content_type="application/json")
# 登录
# @require_http_methods(["POST"])
@csrf_exempt
def login_in(request):
    response = {}
    data=json.loads(request.body)
    print ('login',json.loads(request.body),type(data.get('user_pwd')))
    try:
        login_info = Userinfo.objects.filter(user_name=data.get('user_name')).values()
        print('login_info',login_info)
        if  list(login_info)[0]=='':
            response['msg'] = '该账户不存在'
            response['code'] = 0
            response['status_code'] = 200
        else:
            if int(list(login_info)[0].get('user_pwd')) == int(data.get('user_pwd')):
                response['msg'] = 'success'
                response['code'] = 1
                response['status_code'] = 200
            else:
                response['msg'] = '密码错误'
                response['code'] = 0
                response['status_code'] = 200
    except  Exception as e:
        response['msg'] = str(e)
        response['code'] = 0

    # return JsonResponse(response)
    # return parts.pop().split(';').shift()
    return HttpResponse(json.dumps(response),content_type="application/json")

# @require_http_methods(["GET"])
def show_books(request):
    response = {}
    try:
        books = Book.objects.filter()
        response['list']  = json.loads(serializers.serialize("json", books))
        response['msg'] = 'success'
        response['error_num'] = 0
    except  Exception as e:
        response['msg'] = str(e)
        response['error_num'] = 1

    # return JsonResponse(response)
    return json.dumps(response)

# @require_http_methods(["POST"])
def test_get(request):
    response = {}
    response['result'] = 'ok'
    # try:
    #     books = Book.objects.filter()
    #     response['list']  = json.loads(serializers.serialize("json", books))
    #     response['msg'] = 'success'
    #     response['error_num'] = 0
    # except  Exception as e:
    #     response['msg'] = str(e)
    #     response['error_num'] = 1

    # return JsonResponse(response)
    # return json.dumps(response)
    return HttpResponse(json.dumps(response),content_type="application/json")