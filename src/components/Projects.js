import React from 'react'
import todolist from '../data/images/todolist.png'

const Projects = () => {
  return (
    <section id='projects'>
      <div id='projects-container'>
        <div id='projects-title'>
          <h1>Projects</h1>
        </div>

        <div id='projects-card-container'>
          <div className='row' id='upper-row'>
          <div className='project-card'>
              <div className='project-card-img'>
                <img
                    className='portfolio-img'
                    src=''
                    alt='Todo List'
                />
              </div>
              <div className='project-card-desc'>
                <h3>Tic Tac Toe</h3>
                <p>Play with your friend, a randomized computer, or a computer that can't lose!</p>
                {/* <div>tech used</div> */}
                <a href="https://github.com/brianclee-gh/tictactoe-minmax" alt="tictactoe">
                  <button className='project-btn'>See Project on Github</button>
                </a>
              </div>


            </div>

            <div className='project-card'>
              <div className='project-card-img'>
                <img
                    className='portfolio-img'
                    src={ todolist }
                    alt='Todo List'
                />
              </div>
              <div className='project-card-desc'>
                <h3>To-Do List</h3>
                <p>Add, manage and keep track of all the things you need to get done!</p>
                {/* <div>tech used</div> */}
                <a href="https://github.com/brianclee-gh/todo_list" alt="todo">
                  <button className='project-btn'>See Project on Github</button>
                </a>
              </div>


            </div>
          </div>

          <div className='row' id='lower-row'>

          <div className='project-card'>
              <div className='project-card-img'>
                <img
                    className='portfolio-img'
                    src=''
                    alt='WoW'
                />
              </div>
              <div className='project-card-desc'>
                <h3>World of Warcraft Site</h3>
                <p>See weekly affixes and prepare before heading into your favorite dungeons with
                  included routes, tips and tricks, and recommended items!
                </p>
                {/* <div>tech used</div> */}
                <a href="https://github.com/brianclee-gh/wow-mplus" alt="wow">
                  <button className='project-btn'>See Project on Github</button>
                </a>
              </div>


            </div>
          </div>
        </div>


        </div>
    </section>
  )
}

export default Projects