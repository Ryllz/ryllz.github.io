import React, { Component } from 'react';
import { Grid, Cell } from '../layout';
import { Link } from 'react-router-dom';

class csharp_solidworks extends Component {
        render() {
            return(
                <div className="tab-content" style={{'padding-bottom':'1em'}}>
                <h2>Leapfrogging technical debt</h2>
                    <hr/>
                    <p>Almost every engineer I've worked with and spoken to understands the concept of technical debt - when we take shortcuts, skip processes and just generally do things which delay an inevitable reckoning.</p>
                    <p>Some of my biggest contributions across all my roles were in developing tools to combat this; either pre-emptively or retroactively.</p>
                    <p>Below is a few of the key items I've developed during my career:</p>
                    <ul>
                        <li><b>SolidWorks add-ons</b></li>
                        <p>
                        I'd developed a "CAD assistant" add-on as a side project during my last year at Kinetic, with the goal of increasing the efficiency of the design process by:
                        <br></br>
                        - Creating my own (better if I do say so myself) fastener toolbox system/database as the native SolidWorks one was a buggy mess.
                        <br></br>
                        - Checks when saving and exporting new parts, to ensure key property fields are populated and correct.
                        <br></br>
                        - Moving the key property fields into a drop down select options instead; ensuring consistency in spelling and notation across designers.
                        <br></br>
                        - Automatic sorting of exported files into the appropriate production server folder.
                        <br></br>
                        - Automatic PDF manual export (recursively going through an assembly's constituent parts and exporting all assembly and manufacturing drawings).
                        </p>
                        <li><b>Assembly cleanup tools</b></li>
                        <p>
                        CLI scripts in C#/C++ which can be run on old assemblies to perform a find + replace operation on specified parts to bring up to date, also producing a detailed results log flagging any issues which require human intervention.
                        </p>
                        <p>
                        Out of all the software I've written, these were probably the most stressful during the initial deployment. Despite thorough testing on a mirrored production server, a part of me always worried a weird bug would pop up and mess up hundreds of hours worth of work for other team members.
                        </p>
                        <li><b>Data post-processing tools</b></li>
                        <p>
                        Exporting a Bill of Materials (BOM) from SolidWorks is a very tedious and manual thing; there's also no system of checks, balances or traceability. 
                        </p>
                        <p>
                        One of my projects as a fresh intern during university was creating a tool to automate and improve this process. Of course, being eager to prove myself I ended up going above and beyond by adding a host of features:
                        </p>
                        <p>
                        - Automatically sorting parts into sheets based on type (if the tool detects weldment features in a part, it would sort it into weldment table, likewise for sheet metal parts etc.).
                        </p>
                        <p>
                        - Automatically applying checks for critical properties depending on the part type. For example, if a sheet metal part has a thickness of 5mm, it will flag any bend features with the incorrect radii for this thickness.
                        </p>
                        <p>
                        - Really pretty color coding and formatting in Excel (for highlighting if any of the above is missed). I can't stress enough how hard it was to present the BOM in an aesthetically pleasing and dynamically resizing spreadsheet.
                        </p>
                    </ul>
                </div>
            )
        }
}

export default csharp_solidworks;

