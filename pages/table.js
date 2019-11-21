import React, { Component } from 'react';

class table extends Component {
    render() {
        return (
            <>
                <div class="content-wrapper">
                    {/* <section class="content-header"> */}
                        <section className="content">
                            <div className="row">
                                <div className="col-xs-12">
                                    <div className="box">
                                        <div className="box-header">
                                            <h3 className="box-title">Data Table With Full Features</h3>
                                        </div>
                                        <div className="box-body">
                                            <table id="example1" className="table table-bordered table-striped">
                                                <thead>
                                                    <tr>
                                                        <th>Rendering engine</th>
                                                        <th>Browser</th>
                                                        <th>Platform(s)</th>
                                                        <th>Engine version</th>
                                                        <th>CSS grade</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Trident</td>
                                                        <td>Internet
                                                          Explorer 4.0
                                             </td>
                                                        <td>Win 95+</td>
                                                        <td> 4</td>
                                                        <td>X</td>
                                                    </tr>

                                                    <tr>
                                                        <td>Misc</td>
                                                        <td>Lynx</td>
                                                        <td>Text only</td>
                                                        <td>-</td>
                                                        <td>X</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Misc</td>
                                                        <td>IE Mobile</td>
                                                        <td>Windows Mobile 6</td>
                                                        <td>-</td>
                                                        <td>C</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Misc</td>
                                                        <td>PSP browser</td>
                                                        <td>PSP</td>
                                                        <td>-</td>
                                                        <td>C</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Other browsers</td>
                                                        <td>All others</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>U</td>
                                                    </tr>
                                                </tbody>
                                                <tfoot>
                                                    <tr>
                                                        <th>Rendering engine</th>
                                                        <th>Browser</th>
                                                        <th>Platform(s)</th>
                                                        <th>Engine version</th>
                                                        <th>CSS grade</th>
                                                    </tr>
                                                </tfoot>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    {/* </section> */}
                </div>
            </>
        );
    }
}

export default table;