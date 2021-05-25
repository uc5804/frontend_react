import React from "react";
import "../../css/style.css";
import ListLoad from "../../ListLoad.js";

function Boardpage(){
  return  <div>
    <div class="wrapper">



{/* <!-- Content Wrapper. Contains page content --> */}
<div class="content-wrapper">
  {/* <!-- Content Header (Page header) --> */}
  <section class="content-header">
    <div class="container-fluid">
      <div class="row mb-2">
        <div class="col-sm-6">
          <h1>Simple Tables</h1>
        </div>
        <div class="col-sm-6">
          <ol class="breadcrumb float-sm-right">
            <li class="breadcrumb-item"><a href="#">Home</a></li>
            <li class="breadcrumb-item active">Simple Tables</li>
          </ol>
        </div>
      </div>
    </div>
    {/* <!-- /.container-fluid --> */}
  </section>

  {/* <!-- Main content --> */}
  <section class="content">
    <div class="container-fluid">
      

      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-header">
              <h3 class="card-title">게시판</h3>

              <div class="card-tools">
                <div class="input-group input-group-sm" style={{width :  '150px'}}>
                  <input type="text" name="table_search" class="form-control float-right" placeholder="Search"></input>

                  <div class="input-group-append">
                    <button type="submit" class="btn btn-default">
                      <i class="fas fa-search"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- /.card-header --> */}
            <div class="card-body table-responsive p-0" style={{height: '300px'}}>
              <table class="table table-head-fixed text-nowrap">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>User</th>
                    <th>Title</th>
                    <th>Contents</th>
                  </tr>
                </thead>
                
                  <ListLoad />
                
              </table>
            </div>
            {/* <!-- /.card-body --> */}
          </div>
          {/* <!-- /.card --> */}
        </div>
      </div>
      {/* <!-- /.row --> */}
      
      
    </div>
    {/* <!-- /.container-fluid --> */}
  </section>
  {/* <!-- /.content --> */}
</div>
{/* <!-- /.content-wrapper --> */}


{/* <!-- Control Sidebar --> */}
<aside class="control-sidebar control-sidebar-dark">
  {/* <!-- Control sidebar content goes here --> */}
</aside>
{/* <!-- /.control-sidebar --> */}
</div>
{/* <!-- ./wrapper --> */}
  </div>
}

export default Boardpage;
