import React, { useState } from "react";

import "./Modal.scss";

import { tables } from "../../data";

import classNames from "classnames";

export const Modal = ({ showModal, setShowModal }) => {
  const [userCount, setUserCount] = useState(1);

  const [selectedTable, setSelectedTable] = useState(null);

  return (
    <div className="modal">
      <div className="content">
        <div className="header">
          <h2>Make a Reservation</h2>
          <div onClick={() => setShowModal(false)} className="close-modal">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.8 18L0 16.2L7.2 9L0 1.8L1.8 0L9 7.2L16.2 0L18 1.8L10.8 9L18 16.2L16.2 18L9 10.8L1.8 18Z" fill="#4A291E" />
            </svg>
          </div>
        </div>
        <div className="body">
          <h3 className="title">Personal Information</h3>

          <div className="form">
            <div className="form-group">
              <div className="form-item">
                <input type="text" name="name" id="name" placeholder="Name & Surname" />
                <label htmlFor="name">
                  <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#D9D9D9" d="M12 4C12 5.06087 11.5786 6.07828 10.8284 6.82843C10.0783 7.57857 9.06087 8 8 8C6.93913 8 5.92172 7.57857 5.17157 6.82843C4.42143 6.07828 4 5.06087 4 4C4 2.93913 4.42143 1.92172 5.17157 1.17157C5.92172 0.421427 6.93913 0 8 0C9.06087 0 10.0783 0.421427 10.8284 1.17157C11.5786 1.92172 12 2.93913 12 4ZM16 14V16H0V14C0 11.79 3.58 10 8 10C12.42 10 16 11.79 16 14ZM19.5 10.5V12H18V10.5H19.5ZM17.5 5.5H16V5C16 4.20435 16.3161 3.44129 16.8787 2.87868C17.4413 2.31607 18.2044 2 19 2C19.7956 2 20.5587 2.31607 21.1213 2.87868C21.6839 3.44129 22 4.20435 22 5C22 5.97 21.5 6.88 20.71 7.41L20.41 7.6C19.84 8 19.5 8.61 19.5 9.3V9.5H18V9.3C18 8.11 18.6 7 19.59 6.35L19.88 6.16C20.27 5.9 20.5 5.47 20.5 5C20.5 4.60218 20.342 4.22064 20.0607 3.93934C19.7794 3.65804 19.3978 3.5 19 3.5C18.6022 3.5 18.2206 3.65804 17.9393 3.93934C17.658 4.22064 17.5 4.60218 17.5 5V5.5Z" />
                  </svg>
                </label>
              </div>
              <div className="form-item">
                <input type="text" name="mail" id="mail" placeholder="Email Adress" />
                <label htmlFor="mail">
                  <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#D9D9D9" d="M16.9642 6.61419V13.4939C16.9642 14.1586 16.7001 14.796 16.2302 15.266C15.7602 15.736 15.1227 16 14.4581 16H2.50607C1.84142 16 1.20399 15.736 0.734011 15.266C0.264031 14.796 0 14.1586 0 13.4939V6.61419C0 6.53477 0.00462656 6.45535 0.0131086 6.37747L8.17518 11.4783C8.25528 11.5284 8.34643 11.5581 8.44066 11.5648C8.53489 11.5715 8.62933 11.555 8.71572 11.5168L8.78898 11.4783L16.9511 6.37747C16.9595 6.45535 16.9642 6.53477 16.9642 6.61419ZM8.79977 0.0953282L16.0095 4.84298C16.2 4.9679 16.365 5.12057 16.503 5.2933L8.48208 10.3054L0.461117 5.2933C0.599143 5.12057 0.764929 4.9679 0.95462 4.84298L8.16439 0.0953282C8.25882 0.0331424 8.3694 0 8.48247 0C8.59553 0 8.70612 0.0331424 8.80054 0.0953282H8.79977Z" />
                  </svg>
                </label>
              </div>
            </div>
            <div className="form-group">
              <div className="form-item">
                <input type="text" name="phone" id="phone" placeholder="Phone Number" />
                <label htmlFor="phone">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill="#D9D9D9"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M13.793 18.4442C12.593 18.4 9.19217 17.93 5.63051 14.3692C2.06967 10.8075 1.60051 7.4075 1.55551 6.20667C1.48884 4.37667 2.89051 2.59917 4.50967 1.905C4.70465 1.82081 4.91818 1.78875 5.12928 1.81198C5.34039 1.83521 5.54183 1.91293 5.71384 2.0375C7.04717 3.00917 7.96717 4.47917 8.75717 5.635C8.93099 5.88895 9.00531 6.19796 8.96597 6.50317C8.92663 6.80838 8.77638 7.08844 8.54384 7.29L6.91801 8.4975C6.83946 8.55422 6.78417 8.63753 6.7624 8.73194C6.74064 8.82635 6.75388 8.92545 6.79967 9.01084C7.16801 9.68 7.82301 10.6767 8.57301 11.4267C9.32384 12.1767 10.3672 12.875 11.083 13.285C11.1728 13.3354 11.2784 13.3495 11.3782 13.3244C11.478 13.2993 11.5644 13.2369 11.6197 13.15L12.678 11.5392C12.8726 11.2807 13.1596 11.1076 13.479 11.056C13.7984 11.0044 14.1253 11.0784 14.3913 11.2625C15.5638 12.0742 16.9322 12.9783 17.9338 14.2608C18.0685 14.4341 18.1542 14.6403 18.1819 14.858C18.2096 15.0757 18.1783 15.2969 18.0913 15.4983C17.3938 17.1258 15.6288 18.5117 13.793 18.4442Z"
                    />
                  </svg>
                </label>
              </div>
              <div className="form-item">
                <span>Number of People</span>
                <div className="number">
                  <button onClick={() => userCount > 0 && setUserCount(userCount - 1)} className="minus">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M9.55855 5.58587L5.321 9.82343C5.25679 9.88763 5.18724 9.93322 5.11233 9.96018C5.03742 9.98715 4.95717 10.0004 4.87156 9.99999C4.78595 9.99999 4.7057 9.98651 4.63079 9.95954C4.55588 9.93257 4.48633 9.8872 4.42212 9.82343L0.184567 5.58587C0.0668567 5.46816 0.00543372 5.32092 0.000297286 5.14414C-0.00483914 4.96736 0.0565838 4.81498 0.184567 4.687C0.302276 4.55858 0.449521 4.4916 0.6263 4.48603C0.803078 4.48047 0.955459 4.5421 1.08344 4.67094L4.22951 7.81701L4.22951 0.642056C4.22951 0.46014 4.29114 0.307547 4.41442 0.184272C4.53769 0.060998 4.69007 -0.000426292 4.87156 1.90735e-06C5.05347 1.90735e-06 5.20607 0.0614252 5.32934 0.184272C5.45262 0.307118 5.51404 0.459713 5.51361 0.642056L5.51361 7.81701L8.65968 4.67094C8.77739 4.55323 8.9272 4.4916 9.10911 4.48603C9.29103 4.48047 9.44084 4.5421 9.55855 4.67094C9.68696 4.78865 9.75117 4.93847 9.75117 5.12038C9.75117 5.3023 9.68696 5.45746 9.55855 5.58587Z"
                        fill="#4A291E"
                      />
                    </svg>
                  </button>
                  <span>{userCount}</span>
                  <button onClick={() => setUserCount(userCount + 1)} className="plus">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M9.55855 5.58587L5.321 9.82343C5.25679 9.88763 5.18724 9.93322 5.11233 9.96018C5.03742 9.98715 4.95717 10.0004 4.87156 9.99999C4.78595 9.99999 4.7057 9.98651 4.63079 9.95954C4.55588 9.93257 4.48633 9.8872 4.42212 9.82343L0.184567 5.58587C0.0668567 5.46816 0.00543372 5.32092 0.000297286 5.14414C-0.00483914 4.96736 0.0565838 4.81498 0.184567 4.687C0.302276 4.55858 0.449521 4.4916 0.6263 4.48603C0.803078 4.48047 0.955459 4.5421 1.08344 4.67094L4.22951 7.81701L4.22951 0.642056C4.22951 0.46014 4.29114 0.307547 4.41442 0.184272C4.53769 0.060998 4.69007 -0.000426292 4.87156 1.90735e-06C5.05347 1.90735e-06 5.20607 0.0614252 5.32934 0.184272C5.45262 0.307118 5.51404 0.459713 5.51361 0.642056L5.51361 7.81701L8.65968 4.67094C8.77739 4.55323 8.9272 4.4916 9.10911 4.48603C9.29103 4.48047 9.44084 4.5421 9.55855 4.67094C9.68696 4.78865 9.75117 4.93847 9.75117 5.12038C9.75117 5.3023 9.68696 5.45746 9.55855 5.58587Z"
                        fill="#4A291E"
                      />
                    </svg>
                  </button>
                </div>
                <p htmlFor="people">
                  <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#D9D9D9" fill-rule="evenodd" clip-rule="evenodd" d="M15.6699 9.13C17.0399 10.06 17.9999 11.32 17.9999 13V16H21.9999V13C21.9999 10.82 18.4299 9.53 15.6699 9.13Z" />
                    <path d="M8 8C10.2091 8 12 6.20914 12 4C12 1.79086 10.2091 0 8 0C5.79086 0 4 1.79086 4 4C4 6.20914 5.79086 8 8 8Z" fill="#D9D9D9" />
                    <path fill="#D9D9D9" fill-rule="evenodd" clip-rule="evenodd" d="M14 8C16.21 8 18 6.21 18 4C18 1.79 16.21 0 14 0C13.53 0 13.09 0.0999998 12.67 0.24C13.5305 1.30422 14 2.6314 14 4C14 5.3686 13.5305 6.69578 12.67 7.76C13.09 7.9 13.53 8 14 8ZM8 9C5.33 9 0 10.34 0 13V16H16V13C16 10.34 10.67 9 8 9Z" />
                  </svg>
                </p>
              </div>
            </div>

            <div className="form-group">
              <div className="form-item">
                <input type="text" name="date" id="date" placeholder="Select Date" />
                <label htmlFor="date">
                  <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill="#D9D9D9"
                      d="M5 12C4.71667 12 4.479 11.904 4.287 11.712C4.095 11.52 3.99934 11.2827 4 11C4 10.7167 4.096 10.479 4.288 10.287C4.48 10.095 4.71734 9.99933 5 10C5.28334 10 5.521 10.096 5.713 10.288C5.905 10.48 6.00067 10.7173 6 11C6 11.2833 5.904 11.521 5.712 11.713C5.52 11.905 5.28267 12.0007 5 12ZM9 12C8.71667 12 8.479 11.904 8.287 11.712C8.095 11.52 7.99934 11.2827 8 11C8 10.7167 8.096 10.479 8.288 10.287C8.48 10.095 8.71734 9.99933 9 10C9.28334 10 9.521 10.096 9.713 10.288C9.905 10.48 10.0007 10.7173 10 11C10 11.2833 9.904 11.521 9.712 11.713C9.52 11.905 9.28267 12.0007 9 12ZM13 12C12.7167 12 12.479 11.904 12.287 11.712C12.095 11.52 11.9993 11.2827 12 11C12 10.7167 12.096 10.479 12.288 10.287C12.48 10.095 12.7173 9.99933 13 10C13.2833 10 13.521 10.096 13.713 10.288C13.905 10.48 14.0007 10.7173 14 11C14 11.2833 13.904 11.521 13.712 11.713C13.52 11.905 13.2827 12.0007 13 12ZM2 20C1.45 20 0.979002 19.804 0.587002 19.412C0.195002 19.02 -0.000664969 18.5493 1.69779e-06 18V4C1.69779e-06 3.45 0.196002 2.979 0.588002 2.587C0.980002 2.195 1.45067 1.99933 2 2H3V0.975C3 0.691667 3.096 0.458333 3.288 0.275C3.48 0.0916668 3.71734 0 4 0C4.28334 0 4.521 0.0960001 4.713 0.288C4.905 0.48 5.00067 0.717333 5 1V2H13V0.975C13 0.691667 13.096 0.458333 13.288 0.275C13.48 0.0916668 13.7173 0 14 0C14.2833 0 14.521 0.0960001 14.713 0.288C14.905 0.48 15.0007 0.717333 15 1V2H16C16.55 2 17.021 2.196 17.413 2.588C17.805 2.98 18.0007 3.45067 18 4V18C18 18.55 17.804 19.021 17.412 19.413C17.02 19.805 16.5493 20.0007 16 20H2ZM2 18H16V8H2V18Z"
                    />
                  </svg>
                </label>
              </div>
              <div className="form-item">
                <input type="text" name="time" id="time" placeholder="Select Time" />
                <label htmlFor="time">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#D9D9D9" d="M8.991 0C4.023 0 0 4.032 0 9C0 13.968 4.023 18 8.991 18C13.968 18 18 13.968 18 9C18 4.032 13.968 0 8.991 0ZM11.961 13.239L8.1 9.369V4.5H9.9V8.631L13.239 11.97L11.961 13.239Z" />
                  </svg>
                </label>
              </div>
            </div>

            <div className="form-group">
              <div className="form-item">
                <span>Select Table</span>
              </div>

              <div className="status">
                <div className="statu">
                  <span>Available</span>
                  <div id="available"></div>
                </div>
                <div className="statu">
                  <span>Pending</span>
                  <div id="pending"></div>
                </div>
                <div className="statu">
                  <span>Booked</span>
                  <div id="booked"></div>
                </div>
              </div>
            </div>

            <div className="tables">
              <div className="single">
                {tables.row1.map(
                  (table) =>
                    table.size === 4 && (
                      <div
                        onClick={() => table.status === "Available" && setSelectedTable(table.tableNumber)}
                        className={classNames({
                          "table-item table-1": true,
                          selected: selectedTable === table.tableNumber,
                        })}
                        id={table.status}
                        key={table.id}
                      >
                        <div className="content table-1">
                          <div className="chair-left">
                            <div id={table.status} className="chair" />
                          </div>
                          <div className="chair-right">
                            <div id={table.status} className="chair" />
                          </div>
                          <div className="chair-top">
                            <div id={table.status} className="chair" />
                          </div>
                          <div className="chair-bottom">
                            <div id={table.status} className="chair" />
                          </div>
                          <div className="table">{table.tableNumber}</div>
                        </div>
                      </div>
                    )
                )}
              </div>
              <div className="multi">
                {tables.row2.map((table) =>
                  table.size === 4 ? (
                    <div
                      onClick={() => setSelectedTable(table.id)}
                      className={classNames({
                        "table-item table-1": true,
                        selected: selectedTable === table.id,
                      })}
                      id={table.status}
                      key={table.id}
                    >
                      <div className="content table-1">
                        <div className="chair-left">
                          <div id={table.status} className="chair" />
                        </div>
                        <div className="chair-right">
                          <div id={table.status} className="chair" />
                        </div>
                        <div className="chair-top">
                          <div id={table.status} className="chair" />
                        </div>
                        <div className="chair-bottom">
                          <div id={table.status} className="chair" />
                        </div>
                        <div className="table">{table.tableNumber}</div>
                      </div>
                    </div>
                  ) : (
                    <div
                      onClick={() => setSelectedTable(table.id)}
                      className={classNames({
                        "table-item table-2": true,
                        selected: selectedTable === table.id,
                      })}
                      id={table.status}
                      key={table.id}
                    >
                      <div className="content table-2">
                        <div className="chair-left">
                          <div id={table.status} className="chair" />
                        </div>
                        <div className="chair-right">
                          <div id={table.status} className="chair" />
                        </div>
                        <div className="chair-top">
                          <div id={table.status} className="chair" />
                          <div id={table.status} className="chair" />
                          <div id={table.status} className="chair" />
                        </div>
                        <div className="chair-bottom">
                          <div id={table.status} className="chair" />
                          <div id={table.status} className="chair" />
                          <div id={table.status} className="chair" />
                        </div>
                        <div className="table">{table.tableNumber}</div>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>

            <div className="make-reservation">
              <button>Make Reservation</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
