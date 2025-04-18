
const ThemeSelector = ({ themeColors, selectedContentColor, selectedThemeColor, handleChooseThemeColor }) => {
  return <>
    <div className={`p-8 border border-dashed border-[#333] rounded-2xl mb-6`}>
      <div className='flex items-center justify-between'>
        <div>
          <h2 className='text-lg'>Theme Color</h2>
          {!themeColors?.length && <p className='text-[#333]'>Please upload avatar for selecting theme color.</p>}
        </div>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-2'>
          {themeColors
            ?.filter(
              (item) =>
                item.hex !== selectedContentColor?.hex
            )
            .map((color, idx) => (
              <div
                key={`color_${idx}`}
                className={`border-2 ${color?.hex === selectedThemeColor?.hex ? 'border-blue-600' : 'border-white'} p-1 rounded-3xl`}
              >
                <span
                  key={color.hex}
                  className={`w-[50px] h-[50px] block rounded-2xl`}
                  style={{ backgroundColor: color?.hex }}
                  onClick={() => handleChooseThemeColor(color, 'theme')}
                ></span>
              </div>
            ))}
        </div>
      </div>
      
      {/* content color selection */}
      
      {themeColors?.length > 0 && (
        <div className='flex items-center justify-between mt-10'>
          <div>
            <h2>Text Color</h2>
          </div>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-2'>
            {themeColors
              ?.filter(
                (item) =>
                  item.hex !== selectedThemeColor?.hex
              )
              .map((color, idx) => (
                <div
                  key={`color_${idx}`}
                  className={`border-2 ${color?.hex === selectedContentColor?.hex ? 'border-blue-600' : 'border-white'} p-1 rounded-3xl`}
                >
                  <span
                    key={color.hex}
                    className={`w-[50px] h-[50px] block rounded-2xl`}
                    style={{ backgroundColor: color?.hex }}
                    onClick={() => handleChooseThemeColor(color, 'content')}
                  ></span>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  </>
}

export default ThemeSelector