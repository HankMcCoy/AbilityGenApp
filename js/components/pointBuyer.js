'use strict';

var React = require('react-native');
var StyleSheet = require('../lib/stylesheet');
var BigLabelledNumber = require('./bigLabelledNumber');
var AbilityTableHeader = require('./abilityTableHeader');
var AbilityRow = require('./abilityRow');
var StyledText = require('./styledText');
var getPointsLeft = require('../lib/getPointsLeft');
var levels = require('../data/levels');
var classes = require('../data/classes');
var races = require('../data/races');
var {
  AppRegistry,
  ScrollView,
  StatusBarIOS,
  View,
} = React;

var PointBuyer = React.createClass({
  getInitialState() {
    return {
      baseScores: {
        str: 8,
        dex: 8,
        con: 8,
        int: 8,
        wis: 8,
        cha: 8,
      },
      raceClassBonusAbilities: [],
      levelBonuses: {
        str: 0,
        dex: 0,
        con: 0,
        int: 0,
        wis: 0,
        cha: 0,
      },
    };
  },
  componentDidMount() {
    StatusBarIOS.setStyle(StatusBarIOS.Style.lightContent);
  },
  render() {
    var {
      pointsLeft,
      raceClassBonusesLeft,
      levelBonusesLeft,
    } = this.getFooterValues();

    var abilityRows = Object.keys(this.state.baseScores)
      .map((key) => {
        var hasRaceClassBonus = this.state
          .raceClassBonusAbilities.indexOf(key) !== -1;

        return (
          <AbilityRow
            ability={key}
            score={this.state.baseScores[key]}
            raceClassBonus={hasRaceClassBonus ? 2 : 0}
            levelBonus={this.state.levelBonuses[key]}
            updateBaseScore={this.updateBaseScore}
            toggleRaceClassBonus={this.toggleRaceClassBonus}
            updateLevelBonus={this.updateLevelBonus} />
        );
      });

    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollingContentContainer}>
          <AbilityTableHeader />
          {abilityRows}
        </ScrollView>
        <View style={styles.footer}>
          <BigLabelledNumber
            value={raceClassBonusesLeft}
            label="race/class bonuses left"
            />
          <BigLabelledNumber
            value={levelBonusesLeft}
            label="lvl bonus left"
            />
          <BigLabelledNumber
            value={pointsLeft}
            label="points left"
            />
        </View>
       </View>
    );
  },
  getFooterValues() {
    var totalLevelBonuses = levels.slice(0, this.props.levelIdx).reduce((sum, level) => {
      return sum + level.abilityPlusses.reduce((sum, plus) => sum + plus, 0)
    }, 0);
    var levelBonusesUsed = Object.keys(this.state.levelBonuses).reduce((sum, ability) => {
      return sum + this.state.levelBonuses[ability];
    }, 0);

    return {
      pointsLeft: getPointsLeft(this.state.baseScores),
      raceClassBonusesLeft: 2 - this.state.raceClassBonusAbilities.length,
      levelBonusesLeft: totalLevelBonuses - levelBonusesUsed,
    };
  },
  updateBaseScore(ability, score) {
    this.setState((prevState) => {
      var updatedBaseScores;
      var scoreUpdate = {};

      scoreUpdate[ability] = score;
      updatedBaseScores = Object.assign({}, prevState.baseScores, scoreUpdate);

      return {
        baseScores: getPointsLeft(updatedBaseScores) < 0
          ? prevState.baseScores
          : updatedBaseScores
      };
    });
  },
  updateLevelBonus: function (ability, levelBonus) {
    this.setState((prevState) => {
      var bonusUpdate = {};
      bonusUpdate[ability] = levelBonus;

      return {
        levelBonuses: Object.assign({}, prevState.levelBonuses, bonusUpdate)
      };
    });
  },
  toggleRaceClassBonus(ability) {
    this.setState(state => {
      var { raceClassBonusAbilities } = state;
      var bonusIdx = raceClassBonusAbilities.indexOf(ability);

      if (bonusIdx === -1) {
        if (this.isValidRaceClassAbilityToSelect(ability))
          raceClassBonusAbilities.push(ability);
      }
      else {
        raceClassBonusAbilities.splice(bonusIdx, 1);
      }

      return { raceClassBonusAbilities };
    });
    this.raceClassBonusAbilities
  },
  isValidRaceClassAbilityToSelect(ability) {
    var { raceIdx, classIdx } = this.props;
    var { raceClassBonusAbilities } = this.state;
    var raceAbilities = races[raceIdx].plussableAbilities;
    var classAbilities = classes[classIdx].plussableAbilities;
    var isRaceAbility = (x) => raceAbilities.indexOf(x) !== -1;
    var isClassAbility = (x) => classAbilities.indexOf(x) !== -1;
    var prevSelectedAbility = raceClassBonusAbilities.length
      ? raceClassBonusAbilities[0]
      : undefined;
    var validAbilities = [];

    if (raceClassBonusAbilities.length === 2)
      return false;

    if (!prevSelectedAbility || isRaceAbility(prevSelectedAbility))
      validAbilities = validAbilities.concat(classAbilities);
    if (!prevSelectedAbility || isClassAbility(prevSelectedAbility))
      validAbilities = validAbilities.concat(raceAbilities);

    return validAbilities.indexOf(ability) !== -1;
  },
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    margin: 0,
    padding: 0,
  },
  scrollingContentContainer: {
    flexDirection: 'column',
    margin: 0,
    paddingTop: 0,
    paddingBottom: 80,
  },
});

module.exports = PointBuyer;
