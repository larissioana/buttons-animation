import GradientGlowEffectButton from './components/bubbleButton/GradientGlowEffectButton';
import LoadingButton from './components/loadingButton/LoadingButton';
import SubscribeButton from './components/subscribeButton/SubscribeButton';
import ToggleLightDarkMode from './components/toggleMode/ToggleLightDarkMode';

function App() {

  return (
    <>
      <ToggleLightDarkMode />
      <SubscribeButton />
      <LoadingButton />
      <GradientGlowEffectButton />
    </>
  )
}

export default App
