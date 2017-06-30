var React = require('react');

class Popular extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      selectedLangauge: 'All',
    };

    this.updateLanguage = this.updateLanguage.bind(this);
  }
  updateLanguage(lang) {
    this.setState(function(){
      return {
        selectedLangauge: lang,
      }
    });
  }

  render() {
    var languages = ['All', 'Javascript', 'Ruby', 'Java', 'CSS', 'Python'];

    return (
      <div>
        <ul className='languages'>
          {languages.map(function(lang){
            return (
              <li
                style={lang === this.state.selectedLangauge ? {color: '#d0021b'} : null}
                onClick={this.updateLanguage.bind(null, lang)}
                key={lang}>
                {lang}
              </li>
            )
          }, this)}
        </ul>
      </div>
    )
  }
}

module.exports = Popular;
