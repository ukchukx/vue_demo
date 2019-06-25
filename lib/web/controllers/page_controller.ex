defmodule VueDemo.Web.PageController do
  use VueDemo.Web, :controller

  def index(conn, _params) do
    render(conn, "index.html")
  end
end
