from django.conf.urls import url, include
# import sys
# sys.path.insert()
from .views import add_book,show_books,login_in,test_get

urlpatterns = [
url(r'add_book$', add_book, ),
url(r'show_books$', show_books, ),
url(r'login$', login_in, ),
url(r'testget$', test_get, ),
]