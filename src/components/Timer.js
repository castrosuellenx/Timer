import * as React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {padStart} from 'lodash';

export default function Timer({
  seconds,
  minutes,
  hours,
  runningTime,
  onPlay,
  onPause,
  onQuit,
  onReset,
  quitWasClicked,
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Timer</Text>

      <View style={styles.circle}>
        <Text style={styles.time}>
          {padStart(hours, 2, 0)}:{padStart(minutes, 2, 0)}:
          {padStart(seconds, 2, 0)}
        </Text>
      </View>

      <View style={styles.actions}>
        {runningTime === true ? (
          <TouchableOpacity style={styles.button} onPress={onPause}>
            <View style={styles.buttonCircle}>
              <Icon size={25} color="#FFF" name="pause" />
            </View>
            <Text style={styles.buttonText}>Pause</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.button} onPress={onPlay}>
            <View style={styles.buttonCircle}>
              <Icon size={25} color="#FFF" name="play" />
            </View>
            <Text style={styles.buttonText}>Play</Text>
          </TouchableOpacity>
        )}

        <TouchableOpacity style={styles.button} onPress={onQuit}>
          <View style={styles.buttonCircle}>
            <Icon size={25} color="#FFF" name="stop" />
          </View>
          <Text style={styles.buttonText}>Quit</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={onReset}>
          <View style={styles.buttonCircle}>
            <Icon size={25} color="#FFF" name="refresh" />
          </View>
          <Text style={styles.buttonText}>Reset</Text>
        </TouchableOpacity>
      </View>

      {quitWasClicked && (
        <View style={styles.review}>
          <Text style={styles.reviewText}>
            Tempo decorrido {padStart(hours, 2, 0)}:{padStart(minutes, 2, 0)}:
            {padStart(seconds, 2, 0)}
          </Text>
        </View>
      )}
    </View>
  );
}

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#070417',
  },
  title: {
    color: '#FFF',
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  circle: {
    justifyContent: 'center',
    alignItems: 'center',
    width: windowWidth / 1.5,
    height: windowWidth / 1.5,
    borderRadius: 150,
    borderWidth: 15,
    borderColor: '#1B143F',
  },
  time: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 36,
    fontWeight: 'bold',
  },
  actions: {
    flexDirection: 'row',
    width: '60%',
    justifyContent: 'space-between',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#292639',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    marginTop: '20%',
    color: '#FFF',
    fontSize: 16,
  },
  review: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1B143F',
    borderRadius: 8,
  },
  reviewText: {
    color: '#FAFAFF',
    fontSize: 16,
    textAlign: 'center',
    paddingHorizontal: 18,
    paddingVertical: 8,
  },
});
